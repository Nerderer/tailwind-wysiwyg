import generateClasses from '../generateClasses'
import twConfig from '../../tailwind/defaultConfig.stub'

export default {
  name: 'Interactivity',
  subCategories: [
    {
      name: 'Appearance',
      variants: twConfig.variants.appearance,
      groupedClasses: [
        ['appearance-none']
      ]
    },
    {
      name: 'Cursor',
      variants: twConfig.variants.cursor,
      groupedClasses: [
        generateClasses('cursor', twConfig.theme.cursor, true)
      ]
    },
    {
      name: 'Outline',
      variants: twConfig.variants.outline,
      groupedClasses: [
        ['outline-none']
      ]
    },
    {
      name: 'Pointer Events',
      variants: twConfig.variants.pointerEvents,
      groupedClasses: [
        ['pointer-events-none', 'pointer-events-auto']
      ]
    },
    {
      name: 'Resize',
      variants: twConfig.variants.resize,
      groupedClasses: [
        ['resize-none', 'resize', 'resize-y', 'resize-x']
      ]
    },
    {
      name: 'User Select',
      variants: twConfig.variants.userSelect,
      groupedClasses: [
        ['select-none', 'select-text']
      ]
    }
  ]
}
