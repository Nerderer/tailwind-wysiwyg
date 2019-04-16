<template>
	<div>
		<ul v-if="isResponsive" class="flex">
			<li v-for="(screen, key) in screens"
				:key="key"
				class="flex-1 hover:bg-gray-400 text-center py-2 cursor-pointer border-orange-500 border-width"
				:class="selectedScreen === key ? 'bg-gray-400' : 'bg-gray-300'"
				@click="selectedScreen = key">
				{{ key }}
			</li>
		</ul>

		<div v-if="states.length" class="m-1">
			<select v-model="selectedState" class="w-full">
				<option :value="null" />
				<option v-for="state in states"
					:key="state"
					:value="state">
					{{ state }}
				</option>
			</select>
		</div>

		<selection-group v-for="(group, i) in groupedClasses"
			:key="i"
			:group="group"
			:screen="selectedScreen"
			:state="selectedState"
		/>
	</div>
</template>

<script>
    import config from '../../tailwind/defaultConfig.stub';
    import SelectionGroup from './SelectionGroup';

    export default {
        name: 'SelectionPanel',
        components: {
            SelectionGroup
        },
        props: ['groupedClasses', 'variants'],
        data() {
            return {
                selectedScreen: '*',
                screens: { ...{ '*': 'all' }, ...config.theme.screens },
                states: this.variants.filter(v => v !== 'responsive'), // Remove "responsive", as it is not a real state
                selectedState: null,
                isResponsive: this.variants.indexOf('responsive') >= 0
            };
        },
    };
</script>
