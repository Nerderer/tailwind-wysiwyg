<template>
	<div>
		<main class="w-2/3 flex flex-col h-screen">
			<div class="flex-1">
				<div v-html="parsedTemplate"></div>
			</div>

			<div class="bg-gray-400">
				<ul class="flex">
					<li
						class="flex-1 hover:bg-gray-400 text-center py-2 cursor-pointer border-orange-500 border-width"
						:class="activeTab === 'template' ? 'bg-gray-400' : 'bg-gray-300'"
						@click="activeTab = 'template'"
					>
						Template
					</li>
					<li
						class="flex-1 hover:bg-gray-400 text-center py-2 cursor-pointer border-orange-500 border-width"
						:class="activeTab === 'output' ? 'bg-gray-400' : 'bg-gray-300'"
						@click="activeTab = 'output'"
					>
						Output
					</li>
				</ul>

				<div v-if="activeTab === 'template'" class="p-2 px-4 h-56">
					<code-mirror-editor
						v-model="template"
						:options="editorOptions"
					></code-mirror-editor>

					<button class="bg-blue-500 hover:bg-blue-600 text-white inline-block p-2 float-right my-2" @click="sync()">
						Sync classes
					</button>
				</div>

				<div v-else class="p-2 px-4 h-56">
					<code-mirror-editor
						:value="parsedTemplate"
						:options="editorOptions"
						class="output-editor"
					></code-mirror-editor>
				</div>
			</div>
		</main>

		<aside class="overflow-auto absolute top-0 right-0 bottom-0 w-1/3 flex text-xs">
			<div class="flex-1 bg-gray-700 overflow-auto p-2 text-white">
				<select v-model="storeState.selectedPlaceholder" class="w-full mb-2 text-black border-2 border-orange-500">
					<option v-for="placeholder in storeState.placeholders" :key="placeholder.name" :value="placeholder">
						{{ placeholder.name }}
					</option>
				</select>

				<ul>
					<li v-for="category in categories"
						:key="category.name"
						class="pb-2 cursor-pointer truncate"
						:class="{ 'underline' : category === selectedMainCategory }"
						@click="selectMainCategory(category)"
					>
						{{ category.name }}
					</li>
				</ul>
			</div>

			<ul class="flex-1 bg-gray-500 overflow-auto p-2 text-white">
				<li v-for="subCategory in selectedMainCategory.subCategories"
					:key="subCategory.name"
					class="pb-2 cursor-pointer truncate"
					:class="{ 'underline' : subCategory === selectedSubCategory }"
					@click="selectSubCategory(subCategory)"
				>
					{{ subCategory.name }}
				</li>
			</ul>

			<section class="flex-1 bg-gray-400 overflow-auto">
				<div v-for="subCategory in selectedMainCategory.subCategories" :key="subCategory.name">
					<selection-panel v-if="subCategory === selectedSubCategory"
						:grouped-classes="subCategory.groupedClasses"
						:variants="subCategory.variants || []"
					/>
				</div>
			</section>
		</aside>
	</div>
</template>

<script>
    import CodeMirror from 'codemirror';
    import CodeMirrorEditor from 'vue-cm';
    import emmet from 'codemirror-emmet';
    import categories from '../../setup/categories';
    import SelectionPanel from './SelectionPanel';
    import appStore from '../../stores/appStore';

    // Code Mirror + Emmet
    import 'codemirror/mode/htmlmixed/htmlmixed.js';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/theme/gruvbox-dark.css';
    emmet(CodeMirror);

    const classRegEx = /class\=\"([A-Za-z0-9 _-]*)\"/gm;

    export default {
        name: 'App',
        components: {
            SelectionPanel,
            CodeMirrorEditor
        },
        data() {
            return {
                template: `<div class="card">
  <h1 class="card__title">Please style me!</h1>
  <div class="card__content">And me!</div>
</div>`,
                categories,
                selectedMainCategory: categories[0],
                selectedSubCategory: categories[0].subCategories[0],
                storeState: appStore.state,
                activeTab: 'template',
                editorOptions: {
                    mode: 'htmlmixed',
                    lineNumbers: true,
                    theme: 'gruvbox-dark',
                    extraKeys: {
                        Tab(cm) {
                            // Indent, or place 2 spaces
                            if (cm.somethingSelected()) {
                                cm.indentSelection('add');
                            } else if (cm.getOption('mode').indexOf('html') > -1) {
                                try {
                                    cm.execCommand('emmetExpandAbbreviation');
                                } catch (err) {
                                    console.error(err);
                                }
                            } else {
                                const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
                                cm.replaceSelection(spaces, 'end', '+input');
                            }
                        },
                        Enter: 'emmetInsertLineBreak'
                    }
                }
            };
        },
        computed: {
            parsedTemplate() {
                let parsedTemplate = this.template;
                const regex = classRegEx;
                const str = this.template;
                let m;

                // Extract placeholders from the template
                while ((m = regex.exec(str)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    const regexResult = m[0];
                    const mergedClasses = [];
                    const placeholderClass = m[1].split(' ');

                    // Merge all classes
                    placeholderClass.forEach((placeholder) => {
                        const storedPlaceholder = this.storeState.placeholders.find(p => p.name === placeholder);

                        if (storedPlaceholder) {
                            mergedClasses.push(...storedPlaceholder.selected);
                        }
                    });

                    parsedTemplate = parsedTemplate.replace(regexResult, `class="${mergedClasses.join(' ')}"`);
                }

                return parsedTemplate;
            }
        },
        mounted() {
            this.storeState.selectedPlaceholder = this.storeState.placeholders[0];
            this.sync();
        },
        methods: {
            sync() {
                const regex = classRegEx;
                const str = this.template;
                let m;
                const newPlaceholders = [];

                // Extract placeholders from the template
                while ((m = regex.exec(str)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    // If the element has multiple classes we must extract them all as separate classes
                    m[1].split(' ').forEach(item => newPlaceholders.push(item));
                }

                // Add placeholders if not already added
                for (const placeholder of newPlaceholders) {
                    if (placeholder.length && !this.storeState.placeholders.find(p => p.name === placeholder)) {
                        this.storeState.placeholders.push({
                            name: placeholder,
                            selected: []
                        });
                    }
                }

                // Remove old unused placeholders
                this.storeState.placeholders = this.storeState.placeholders.filter(p => newPlaceholders.includes(p.name));
            },
            selectMainCategory(category) {
                this.selectedMainCategory = category;
                this.selectedSubCategory = {};
            },
            selectSubCategory(category) {
                this.selectedSubCategory = category;
            }
        }
    };
</script>

<style type="text/scss">
	.CodeMirror {
		border: 1px solid #eee;
		height: 160px;
	}

	.output-editor + .CodeMirror {
		background: #444;
	}
</style>
