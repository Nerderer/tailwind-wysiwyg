export default function (className, config, keepDefaultSuffix) {
  const generatedClasses = []

  for (const selector in config) {
    if (selector === 'default') {
      if (keepDefaultSuffix) {
        // Keep classes like "cursor-default"
        generatedClasses.push(className + '-' + selector)
      } else {
        // But classes like "border-default" should become "border"
        generatedClasses.push(className)
      }
    } else {
      generatedClasses.push(className + '-' + selector)
    }
  }

  return generatedClasses
}
