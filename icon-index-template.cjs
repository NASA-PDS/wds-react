const path = require('path')

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath.path, path.extname(filePath.path))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    return `export { default as Icon${exportName} } from './${basename}'`
  })
  return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate