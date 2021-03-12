import twConfig from '../../tailwind/defaultConfig.stub'
import generateClasses from '../generateClasses'
import colorVariations from '../colorVariations'

export default {
  name: 'Typography',
  subCategories: [
    {
      name: 'Color',
      variants: twConfig.variants.textColor,
      groupedClasses: [
        generateClasses('text', colorVariations)
      ]
    },
    {
      name: 'Font Family',
      variants: twConfig.variants.fontFamily,
      groupedClasses: [
        generateClasses('font', twConfig.theme.fontFamily)
      ]
    },
    {
      name: 'Font Size',
      variants: twConfig.variants.fontSize,
      groupedClasses: [
        generateClasses('text', twConfig.theme.fontSize)
      ]
    },
    {
      name: 'Font Smoothing',
      variants: twConfig.variants.fontSmoothing,
      groupedClasses: [
        ['antialiased', 'subpixel-antialiased']
      ]
    },
    {
      name: 'Font Style',
      variants: twConfig.variants.fontStyle,
      groupedClasses: [
        ['italic', 'not-italic']
      ]
    },
    {
      name: 'Font Weight',
      variants: twConfig.variants.fontWeight,
      groupedClasses: [
        generateClasses('font', twConfig.theme.fontWeight)
      ]
    },
    {
      name: 'Letter Spacing',
      variants: twConfig.variants.letterSpacing,
      groupedClasses: [
        generateClasses('tracking', twConfig.theme.letterSpacing)
      ]
    },
    {
      name: 'Line Height',
      variants: twConfig.variants.lineHeight,
      groupedClasses: [
        generateClasses('leading', twConfig.theme.lineHeight)
      ]
    },
    {
      name: 'List Style Type',
      variants: twConfig.variants.listStyleType,
      groupedClasses: [
        generateClasses('list', twConfig.theme.listStyleType)
      ]
    },
    {
      name: 'List Style Position',
      variants: twConfig.variants.listStylePosition,
      groupedClasses: [
        ['list-inside', 'list-outside']
      ]
    },
    {
      name: 'Text Alignment',
      variants: twConfig.variants.textAlign,
      groupedClasses: [
        ['text-left', 'text-center', 'text-right', 'text-justify']
      ]
    },
    {
      name: 'Text Decoration',
      variants: twConfig.variants.textDecoration,
      groupedClasses: [
        ['underline', 'line-through', 'no-underline']
      ]
    },
    {
      name: 'Text Transform',
      variants: twConfig.variants.textTransform,
      groupedClasses: [
        ['uppercase', 'lowercase', 'capitalize', 'normal-case']
      ]
    },
    {
      name: 'Vertical Alignment',
      variants: twConfig.variants.verticalAlign,
      groupedClasses: [
        ['align-baseline', 'align-top', 'align-middle', 'align-bottom', 'align-text-top', 'align-text-bottom']
      ]
    },
    {
      name: 'Whitespace',
      variants: twConfig.variants.whitespace,
      groupedClasses: [
        ['whitespace-normal', 'whitespace-no-wrap', 'whitespace-pre', 'whitespace-pre-line', 'whitespace-pre-wrap']
      ]
    },
    {
      name: 'Word Break',
      variants: twConfig.variants.wordBreak,
      groupedClasses: [
        ['break-normal', 'break-words', 'break-all', 'truncate']
      ]
    }
  ]
}
