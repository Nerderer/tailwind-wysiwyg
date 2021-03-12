import twConfig from '../../tailwind/defaultConfig.stub'
import generateClasses from '../generateClasses'
import colorVariations from '../colorVariations'

export default {
  name: 'Borders',
  subCategories: [
    {
      name: 'Border Color',
      variants: twConfig.variants.borderColor,
      groupedClasses: [
        generateClasses('border', colorVariations)
      ]
    },
    {
      name: 'Border Style',
      variants: twConfig.variants.borderStyle,
      groupedClasses: [
        ['border-solid', 'border-dashed', 'border-dotted', 'border-none']
      ]
    },
    {
      name: 'Border Width',
      variants: twConfig.variants.borderWidth,
      groupedClasses: [
        generateClasses('border', twConfig.theme.borderWidth),
        generateClasses('border-t', twConfig.theme.borderWidth),
        generateClasses('border-r', twConfig.theme.borderWidth),
        generateClasses('border-b', twConfig.theme.borderWidth),
        generateClasses('border-l', twConfig.theme.borderWidth)
      ]
    },
    {
      name: 'Border Radius',
      variants: twConfig.variants.borderRadius,
      groupedClasses: [
        generateClasses('rounded', twConfig.theme.borderRadius),
        generateClasses('rounded-t', twConfig.theme.borderRadius),
        generateClasses('rounded-r', twConfig.theme.borderRadius),
        generateClasses('rounded-b', twConfig.theme.borderRadius),
        generateClasses('rounded-l', twConfig.theme.borderRadius),
        generateClasses('rounded-tr', twConfig.theme.borderRadius),
        generateClasses('rounded-tl', twConfig.theme.borderRadius),
        generateClasses('rounded-br', twConfig.theme.borderRadius),
        generateClasses('rounded-bl', twConfig.theme.borderRadius)
      ]
    }
  ]
}
