# another json/xml converter

Converts JSON or object to XML. In case of array, it will create a new element for each item named as parent element without the last symbol e.g. 's'.

## how to install
```
npm install another-json-xml --save
```

how to use
```
const { json2xml } = require('another-json-xml');

const json = {
  "name": "John",
  "age": 30,
  "cars": {
    "car1": "Ford",
    "car2": "BMW",
    "car3": "Fiat"
  }
}
const xml = json2xml(json, config);
```

config( optional)
```
const config = {
  root: 'root',
  indent: '  ',
  exceptions: ['_id'],
  minify: false,
  listItemNames: {
    'cars': 'car'
  }
}
```

- `root` - root element name, default is 'root'
- `indent` - indent string, default is '\t'
- `exceptions` - array of keys that should be ignored, default is []
- `minify` - minify xml, default is false, in case it is true `indent` will be ignored
- `listItemNames` - dictionary for list elements, default is {}, in case of `cars` it will be `car`