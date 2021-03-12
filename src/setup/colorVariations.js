import twConfig from '../tailwind/defaultConfig.stub'

function generateColorVariations () {
  const allColorVariations = twConfig.theme.colors
  const generatedColors = {}

  for (const color in allColorVariations) {
    const colorVal = allColorVariations[color]

    if (typeof colorVal === 'object') {
      for (const colorVariation in colorVal) {
        generatedColors[color + '-' + colorVariation] = undefined
      }
    } else {
      generatedColors[color] = undefined
    }
  }

  return generatedColors
}

const colorVariations = generateColorVariations()

export default colorVariations
