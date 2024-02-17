const fs = require('fs')
var movies = fs.readFileSync('films.txt', 'utf8')
console.log(movies.split('\n'))
