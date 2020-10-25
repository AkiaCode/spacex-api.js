const test = require('../src/index')
const client = new test()
Promise.all([
    client.capsules(),
]).then(console.log)