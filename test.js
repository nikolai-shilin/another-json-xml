const { json2xml } = require('./index');

const json = {
  "acceptanceCertificate": {
      "releasedAt": "2023-10-31T00:00:00.000Z",
      "periodFrom": "2023-10-01T00:00:00.000Z",
      "periodTo": "2023-10-31T00:00:00.000Z",
      "partTitle": "Исполнитель",
      "counterpartTitle": "Заказчик",
      "part": {
          "id": "eac4e604-d8ca-4e98-93a4-ab6196342830",
          "userId": "eac4e604",
          "createdAt": "2023-10-01T19:11:52.174Z",
          "updatedAt": "2023-10-01T19:11:52.174Z",
          "unp": "193566299",
          "name": "ООО \"Докс\"",
          "address": "220092, Беларусь, г. Минск, ул. Столетова, дом 7Б, оф. 615",
          "contactPersonTitle": "Директор",
          "contactPersonName": "Борюсюк В.А.",
          "bank": {
              "account": "BY88ALFA3012234523423452345",
              "bic": "ALFABY2X",
              "name": "ЗАО 'Альфа-банк'",
              "address": "220013, г.Минск, ул. Сурганова, 200-147"
          },
          "isImportedFromKartoteka": false,
          "default": true,
          "signatureFilename": "",
          "stampFilename": "",
          "stampedsignatureFilename": "quidox.profiles.stampedsignature.611c1940-50db-40ae-a0dd-f1e405690c81.png",
          "logoFilename": "quidox.profiles.logo.eccdac28-7e84-4b1d-aaae-c48b2696f279.jpg",
          "_id": "6519c478cb18223e6b8d5902",
          "__v": 0
      },
      "counterpart": {
          "id": "6dba7205-7e4f-4dac-8b3c-7a8318fa76d4",
          "userId": "2134234",
          "createdAt": "2023-10-04T07:50:51.132Z",
          "updatedAt": "2023-10-04T07:50:51.132Z",
          "unp": "192287331",
          "name": "ООО \"Проект Домбай\"",
          "address": "г. Минск,ул. Минская, д.38, корп.1, пом. 891",
          "contactPersonTitle": "",
          "contactPersonName": "",
          "bank": {
              "account": "",
              "bic": "",
              "name": "",
              "address": ""
          },
          "isImportedFromKartoteka": true,
          "email": "quidox@deal.by",
          "_id": "651d195b5eaf47cb160b2dfa",
          "__v": 0
      },
      "number": "192287331-23-10",
      "place": "г. Минск",
      "includeVat": false,
      "currency": "BYN",
      "products": [
          {
              "id": "a4d2b0c3-18be-445c-a706-6e3fe36d8f03",
              "type": "service",
              "name": "Услуги по технической поддержке-пакет \"Стандарт\"",
              "sku": "99.1.400.00.",
              "unit": "усл.",
              "costPerUnit": 400,
              "vat": 0,
              "amount": 1,
              "discount": 0,
              "discountType": "percentage"
          },
          {
              "id": "785d5185-4818-4a75-8b2a-d3dfae7e39c4",
              "type": "service",
              "name": "Про",
              "sku": "3.1.750.00.",
              "unit": "усл.",
              "costPerUnit": 750,
              "vat": 0,
              "amount": 1,
              "discount": 0,
              "discountType": "percentage"
          }
      ],
      "total": 1150,
      "sides": "double",
      "basis": "Договор возмездного оказания услуг № 01-11-19 от 11.11.2019г.",
      "introduction": "Настоящим Актом стороны подтверждают, что Исполнителем с надлежащим качеством  оказаны услуги (выполнены работы), а Заказчиком приняты указанные ниже услуги (работы):",
      "additionalConditions": "* Исполнитель не является плательщиком НДС в соответствии с подп. 1.1.2 п. 1.1 ч. 1 ст. 326 Налогового кодекса Республики Беларусь\n\nЗаказчик к качеству, срокам оказания и объему услуг претензий не имеет.\n\nНастоящий акт подлежит подписанию электронной цифровой подписью уполномоченным представителем Исполнителя, и направлению Заказчику в виде электронного документа посредством",
      "_id": "651d3bc35eaf47cb160b3339"
  },

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