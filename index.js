const getTagName = (currentKey, parentKey, config) =>
  // is currentKey a number like in case of an array
  isNaN(currentKey)
      ? currentKey
      : config.singulars[parentKey]
        ? config.singulars[parentKey]
        : parentKey.substring(0, parentKey.length - 1);




const translate = (json, parentKey, depth, config) => {

  let {
    indent,
    exclude,
    minify
  } = config;

  let xml = '';
  let eol = minify ? '' : '\n';
  indent = minify ? '' : indent;

  for (let key in json) {
    if (exclude.includes(key)) continue;

    if (json[key] instanceof Object) {
      let tag = getTagName(key, parentKey, config)
      xml += translate(json[key], tag, depth + 1, config);

    } else {
      let tag = getTagName(key, parentKey, config)

      xml += indent.repeat(depth + 1)

      if (typeof json[key] !== 'undefined') {
        xml += '<' + tag + '>'
        xml += json[key]
        xml += '</' + tag + '>'

      } else {
        xml += '<' + tag + ' />'
      }
      xml += eol
    }
  }
  let result = ''
  result += indent.repeat(depth)
  result += '<' + parentKey + '>'
  result += eol
  result += xml
  result += indent.repeat(depth)
  result += '</' + parentKey + '>'
  result += eol

  return result
}




const json2xml = (json, config) => {

  // default config
  config = {
    root: 'root',
    indent: '\t',
    exclude: [],
    minify: false,
    singulars: {},
    declaration: '<?xml version="1.0" encoding="UTF-8"?>',
    ...config
  }

  const prefix = config.declaration + (config.minify ? '' : '\n');

  return prefix + translate(json, config.root, 0, config);
}

const getConfiguredJson2Xml = (config) => {
  return (json) => json2xml(json, config)
}

module.exports ={ json2xml, getConfiguredJson2Xml }

