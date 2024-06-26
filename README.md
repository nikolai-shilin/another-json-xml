# Another json/xml converter

Converts JSON or object to XML. In case of array, it will create a new element for each item named as parent element without the last symbol e.g. `cars` -> `car` items  or with a name defined in a config parameter `singulars`: `people: 'person'`.

## How to install
```
npm install another-json-xml --save
```

# How to use
```
const { json2xml } = require('another-json-xml');

const json = {
  "name": "John",
  "age": 30,
  "cars": [
    {
      "name": "Ford"
    }, {
      "name": "BMW"
    }, {
      "name": "Fiat"
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
			<name>Ford</name>
		</car>
		<car>
			<name>BMW</name>
		</car>
		<car>
			<name>Fiat</name>
		</car>
	</cars>
</root>
```

# Config (optional)

You can pass config object as a second parameter to `json2xml` function e.g.
```
const xml = json2xml(json, config);
```

Or wrap it in a function for a shared config settings and use as a function e.g.
```
const { getConfiguredJson2Xml } = require('another-json-xml');

const json2xml = getConfiguredJson2Xml({
  root: 'root',
  indent: '\t',
  exclude: [],
  minify: false,
  singulars: {},
});

const xml = json2xml(json);
console.log(xml);
```

Default config is:

```
const config = {
  root: 'root',
  indent: '\t',
  exclude: [],
  minify: false,
  singulars: {},
  declaration: '<?xml version="1.0" encoding="UTF-8"?>'
}
```

- `root` - root element name, default value is `'root'`
- `indent` - indent string, default is `'\t'`
- `exclude` - array of keys that should be ignored e.g. `['_id']`, default is []
- `minify` - minify xml, default is `false`, in case it is true `indent` will be ignored
- `singulars` - dictionary for list elements, default is {} and be default in case of `cars` it will be `car` (removes last symbol from the key name)
- `declaration` - add xml declaration, default is `<\?xml version="1.0" encoding="UTF-8"\?>`

e.g.

```
const config = {
  root: 'secret-data',
  indent: '    ',
  exclude: ['age', 'salary', 'password'],
  minify: false,
  singulars: {
    people: 'person'
  }
}