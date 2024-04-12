# another json/xml converter

Converts JSON or object to XML. In case of array, it will create a new element for each item named as parent element without the last symbol e.g. 's'.

## how to install
```
npm install another-json-xml --save
```

# how to use
```
const { json2xml } = require('another-json-xml');

const json = {
  "name": "John",
  "age": 30,
  "cars": [
    {
    "car1": "Ford"
    }, {
      "car2": "BMW"
    }, {
      "car3": "Fiat"
    }
  ]
}
const xml = json2xml(json);
```

result

```
<?xml version="1.0" encoding="UTF-8"?>
<root>
	<name>John</name>
	<age>30</age>
	<cars>
		<car>
			<car1>Ford</car1>
		</car>
		<car>
			<car2>BMW</car2>
		</car>
		<car>
			<car3>Fiat</car3>
		</car>
	</cars>
</root>
```

# config( optional)

You can pass config object as a second parameter to `json2xml` function e.g. `const xml = json2xml(json, config);`. Default config is:

```
const config = {
  root: 'root',
  indent: '\t',
  exclude: [],
  minify: false,
  singulars: {},
}
```

- `root` - root element name, default is 'root'
- `indent` - indent string, default is '\t'
- `exclude` - array of keys that should be ignored, default is []
- `minify` - minify xml, default is false, in case it is true `indent` will be ignored
- `singulars` - dictionary for list elements, default is {}, in case of `cars` it will be `car`

e.g.

```
const config = {
  root: 'root',
  indent: '\t',
  exclude: ['age'],
  minify: false,
  singulars: {
    cars: 'car'
  }
}