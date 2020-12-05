const fetch = require('node-fetch')
const baseUrl = "https://api.spacexdata.com/v4/"

module.exports = class SpaceX_API {
   static async getData (endpoint, ID = undefined, Query = undefined) {
        if (ID == undefined && Query == undefined)    {
            return await fetch(baseUrl + endpoint , { method: 'GET', header: { Accept: 'application/json', 'User-Agent': '*' }}).then(res => res.json())
        } else if (ID != undefined && Query == undefined) {
            return await fetch(baseUrl + endpoint + '/' + ID , { method: 'GET', header: { Accept: 'application/json', 'User-Agent': '*' }}).then(res => res.json())
        } else if (ID == undefined && Query != undefined) {
            return await fetch(baseUrl + endpoint + '/query',  { method: 'POST', body: JSON.stringify(Query), header: { Accept: 'application/json', 'User-Agent': '*' } }).then(res => res.json())
        } else {
            throw new Error("NOT FOUND")
        }
    }
}