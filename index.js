const getTagName = (currentKey, parentKey) =>
  // is currentKey a number like in case of an array
  isNaN(currentKey)
    ? currentKey
    : parentKey.substring(0, parentKey.length - 1);




const translate = (json, parentKey, depth, config) => {

  let {
    tab,
    exceptions,
    minify
  } = config;

  let xml = '';
  let eol = minify ? '': '\n';
  tab = minify ? '': tab;

  for (let key in json) {
    if (exceptions.includes(key)) continue;

    if (json[key] instanceof Object) {
      let tag = getTagName(key, parentKey)
      xml += translate(json[key], tag, depth + 1, config);

    } else {
      let tag = getTagName(key, parentKey)

      xml += tab.repeat(depth + 1)

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
  result += tab.repeat(depth)
  result += '<' + parentKey + '>'
  result += eol
  result += xml
  result += tab.repeat(depth)
  result += '</' + parentKey + '>'
  result += eol

  return result
}




export const json2xml = (json, config) => {

  // default config
  config = {
    root: 'root',
    tab: '\t',
    exceptions: [],
    minify: false,
    ...config
  }

  return translate(json, config.root, 0, config);
}



