const test = require('../src/index')
const client = new test()
Promise.all([
    client.capsules(),
    client.company(),
    client.crew(),
    client.dragons(),
    client.landpads(),
    client.launches(),
    client.payloads(),
    client.roadster(),
    client.rockets(),
    client.ships(),
    client.starlink()
]).then(console.log)