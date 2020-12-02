const fetch = require('node-fetch')
const baseUrl = "https://api.spacexdata.com/v4/"

module.exports = {
    async get (endpoint) {
        return await fetch(baseUrl + endpoint , { method: 'GET' }).then(res => res.json())
    },
    async getID (endpoint, ID = undefined) {
        return await fetch(baseUrl +  endpoint + '/' + ID,  { method: 'GET' }).then(res => res.json())
    },
    async post (endpoint, Query = undefined) {
        return await fetch(baseUrl + endpoint + '/query',  { method: 'POST', body: Query }).then(res => res.json())
    }
}