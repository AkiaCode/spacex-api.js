const test = require('../src/index')
Promise.all([
    test.getData("launches", "past")
]).then(console.log)