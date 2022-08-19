const fs = require('fs')
// const book ={
//     title:'purple hibiscus',
//     author:'chimamanda',
// }
// const bookJSON =JSON.stringify(book)
// fs.writeFileSync( 'json.json',bookJSON)
//console.log(bookJSON)

//const parsedData = JSON.parse(bookJSON)
//console.log(parsedData.author)
const dataBuffer = fs.readFileSync('json.json')
const dataJson = dataBuffer.toString();
const data =JSON.parse(dataJson)
console.log(data.title);