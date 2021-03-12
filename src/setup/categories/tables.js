import twConfig from '../../tailwind/defaultConfig.stub'

export default {
  name: 'Tables',
  subCategories: [
    {
      name: 'Border Collapse',
      variants: twConfig.variants.borderCollapse,
      groupedClasses: [
        ['border-collapse', 'border-separate']
      ]
    },
    {
      name: 'Table Layout',
      variants: twConfig.variants.tableLayout,
      groupedClasses: [
        ['table-auto', 'table-fixed']
      ]
    }
  ]
}
