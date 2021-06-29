const fs = require('fs')
const OUTPUT_DIR = '../lib'
const COMPONENTS_DIR = 'src/components'

// create dir if not exist
 const makesure = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

module.exports = {
  OUTPUT_DIR,
  COMPONENTS_DIR,
  makesure,
}