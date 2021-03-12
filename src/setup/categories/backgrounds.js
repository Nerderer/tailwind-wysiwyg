import twConfig from '../../tailwind/defaultConfig.stub'
import generateClasses from '../generateClasses'
import colorVariations from '../colorVariations'

export default {
  name: 'Backgrounds',
  subCategories: [
    {
      name: 'Background Attachment',
      variants: twConfig.variants.backgroundAttachment,
      groupedClasses: [
        ['bg-fixed', 'bg-local', 'bg-scroll', 'bg-none']
      ]
    },
    {
      name: 'Background Color',
      variants: twConfig.variants.backgroundColor,
      groupedClasses: [
        generateClasses('bg', colorVariations)
      ]
    },
    {
      name: 'Background Position',
      variants: twConfig.variants.backgroundPosition,
      groupedClasses: [
        generateClasses('bg', twConfig.theme.backgroundPosition)
      ]
    },
    {
      name: 'Background Repeat',
      variants: twConfig.variants.backgroundRepeat,
      groupedClasses: [
        ['bg-repeat', 'bg-no-repeat', 'bg-repeat-x', 'bg-repeat-y']
      ]
    },
    {
      name: 'Background Size',
      variants: twConfig.variants.backgroundSize,
      groupedClasses: [
        generateClasses('bg', twConfig.theme.backgroundSize)
      ]
    }
  ]
}
