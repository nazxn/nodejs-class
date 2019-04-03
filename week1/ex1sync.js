var fs = require('fs')

console.log('Beginning Reading File')
var data = fs.readFileSync('input.txt')
console.log(data.toString())
console.log('End Reading File')
console.log('Begin Appending File')
try {
  fs.appendFileSync('input.txt', 'data to append');
  console.log('End Appending File');
} catch (err) {
  /* Handle the error */
}
console.log('Begin re-reading file')
var newdata = fs.readFileSync('input.txt')
console.log(newdata.toString())
console.log('End re-reading file')