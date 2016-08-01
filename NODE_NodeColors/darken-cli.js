var colorutil = require('./colorutil.js')

var l = colorutil.darken(process.argv[2], process.argv[3], process.argv[4])

console.log("Darker RGB equals ", "r",l[0],"g",l[1],"b",l[2])
