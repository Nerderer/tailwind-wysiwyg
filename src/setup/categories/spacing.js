import generateClasses from '../generateClasses'
import theme from '../theme'
import twConfig from '../../tailwind/defaultConfig.stub'

export default {
  name: 'Spacing',
  subCategories: [
    {
      name: 'Padding',
      variants: twConfig.variants.padding,
      groupedClasses: [
        generateClasses('p', twConfig.theme.padding(theme)),
        generateClasses('pt', twConfig.theme.padding(theme)),
        generateClasses('pr', twConfig.theme.padding(theme)),
        generateClasses('pb', twConfig.theme.padding(theme)),
        generateClasses('pl', twConfig.theme.padding(theme)),
        generateClasses('px', twConfig.theme.padding(theme)),
        generateClasses('py', twConfig.theme.padding(theme))
      ]
    },
    {
      name: 'Margin',
      variants: twConfig.variants.margin,
      groupedClasses: [
        generateClasses('m', twConfig.theme.margin(theme)),
        generateClasses('mt', twConfig.theme.margin(theme)),
        generateClasses('mr', twConfig.theme.margin(theme)),
        generateClasses('mb', twConfig.theme.margin(theme)),
        generateClasses('ml', twConfig.theme.margin(theme)),
        generateClasses('mx', twConfig.theme.margin(theme)),
        generateClasses('my', twConfig.theme.margin(theme))
      ]
    },
    {
      name: 'Negative Margin',
      variants: twConfig.variants.margin,
      groupedClasses: [
        generateClasses('-m', twConfig.theme.negativeMargin(theme)),
        generateClasses('-mt', twConfig.theme.negativeMargin(theme)),
        generateClasses('-mr', twConfig.theme.negativeMargin(theme)),
        generateClasses('-mb', twConfig.theme.negativeMargin(theme)),
        generateClasses('-ml', twConfig.theme.negativeMargin(theme)),
        generateClasses('-mx', twConfig.theme.negativeMargin(theme)),
        generateClasses('-my', twConfig.theme.negativeMargin(theme))
      ]
    }
  ]
}
