<template>
  <ul>
    <li
      v-for="utilityClass in prefixedGroup"
      :key="utilityClass"
      class="p-1 cursor-pointer select-none hover:bg-orange-400 truncate"
      :class="{ 'bg-orange-500': storeState.selectedPlaceholder.selected.indexOf(utilityClass) >= 0 }"
      :title="utilityClass"
      @click="toggleItem(utilityClass, prefixedGroup)"
    >
      {{ unPrefix(utilityClass) }}
    </li>
    <li class="px-8">
      <hr class="border border-gray-500">
    </li>
  </ul>
</template>

<script>
import appStore from '../../stores/appStore'

export default {
  name: 'SelectionGroup',
  props: ['group', 'screen', 'state'],
  data () {
    return {
      storeState: appStore.state
    }
  },
  computed: {
    prefixedGroup () {
      return this.group.map(u => this.variationPrefix + u)
    },
    variationPrefix () {
      let prefix = ''

      if (this.screen !== '*') {
        prefix = `${this.screen}:`
      }

      if (this.state) {
        prefix = `${prefix}${this.state}:`
      }

      return prefix
    }
  },
  methods: {
    unPrefix (utilityClass) {
      return utilityClass.replace(this.variationPrefix, '')
    },
    toggleItem (utilityClass, group) {
      if (this.itemIsSelected(utilityClass)) {
        // Deselect
        this.storeState.selectedPlaceholder.selected = this.storeState.selectedPlaceholder.selected.filter(c => c !== utilityClass)
      } else {
        // Remove any previous selected class from this group
        this.storeState.selectedPlaceholder.selected = this.storeState.selectedPlaceholder.selected.filter(c => group.indexOf(c) < 0)

        // Add this class
        this.storeState.selectedPlaceholder.selected.push(utilityClass)
      }
    },
    itemIsSelected (utilityClass) {
      return this.storeState.selectedPlaceholder.selected.indexOf(utilityClass) >= 0
    }
  }
}
</script>
