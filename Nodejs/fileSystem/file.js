const fs = require('fs')

const textInFile= fs.readFileSync('testText.txt','utf-8')
console.log("🚀 ~ textInFile:", textInFile)
const textToRead = `text should write to data: ${textInFile}`

fs.writeFileSync('filewrited',textToRead)