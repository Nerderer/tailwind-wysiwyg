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
					<prism-editor v-model="template" language="html"></prism-editor>

					<button class="bg-blue-500 hover:bg-blue-600 text-white inline-block p-2 float-right my-2" @click="sync()">
						Sync [placeholders]
					</button>
				</div>

				<div v-else class="p-2 px-4 h-56">
					<prism-editor v-model="parsedTemplate" readonly language="html"></prism-editor>
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
    import 'prismjs';
    import 'prismjs/themes/prism.css';
    import PrismEditor from 'vue-prism-editor';
    import categories from '../../setup/categories';
    import SelectionPanel from './SelectionPanel';
    import appStore from '../../stores/appStore';

    export default {
        name: 'App',
        components: {
            SelectionPanel,
            PrismEditor
        },
        data() {
            return {
                template: `<div class="[card]">
  <h1 class="[card__title]">Please style me!</h1>
  <div class="[card__content]">And me!</div>
</div>`,
                categories,
                selectedMainCategory: categories[0],
                selectedSubCategory: categories[0].subCategories[0],
                storeState: appStore.state,
                activeTab: 'template'
            };
        },
        computed: {
            parsedTemplate() {
                let parsedTemplate = this.template;

                for (const placeholder of this.storeState.placeholders) {
                    parsedTemplate = parsedTemplate.replace('[' + placeholder.name + ']', placeholder.selected.join(' '));
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
                const regex = /class\=\"\[([A-Za-z0-9 _]*)\]\"/gm;
                const str = this.template;
                let m;
                const newPlaceholders = [];

                // Extract placeholders from the template
                while ((m = regex.exec(str)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    newPlaceholders.push(m[1]);
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
