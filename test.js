const { json2xml } = require('./index');

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


console.log(
  json2xml(
    json,
    {
      root: 'root',
      tab: '\t',
      exclude: [
        '_id',
        '__v',
        'id',
        'signatureFilename',
        'stampFilename',
        'stampedsignatureFilename',
        'logoFilename',
        'isImportedFromKartoteka',
        'default',
        'createdAt',
        'updatedAt',
        'userId'
      ]
      }
  )
);