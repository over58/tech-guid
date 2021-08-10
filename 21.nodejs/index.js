const path =  require('path')
const a = require('./common')

a.something = 456
console.log(a)
a.print()

require('./b')

