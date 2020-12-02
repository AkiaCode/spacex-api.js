const endpoint  = require('./endpoint')

module.exports = class SpaceX_API {
    capsules (capsule_id = undefined, query = undefined) {
        if (capsule_id != undefined) {
            return endpoint.getID('capsules', capsule_id)
        } else if (query != undefined) {
            return endpoint.post('capsules', query)
        } else { return endpoint.get('capsules') }
    }
    company () { return endpoint.get('company') }
    crew (crew_id = undefined, query = undefined) {
        if (crew_id != undefined) {
            return endpoint.getID('crew', crew_id)
        } else if (query != undefined) {
            return endpoint.post('crew', query)
        } else { return endpoint.get('crew') }
    }
    dragons (dragons_id = undefined, query = undefined) {
        if (dragons_id != undefined) {
            return endpoint.getID('dragons', dragons_id)
        } else if (query != undefined) {
            return endpoint.post('dragons', query)
        } else { return endpoint.get('dragons') }
    }
    launches (schedule = undefined, launches_id = undefined, query = undefined) {
        if (schedule != undefined) {
                schedule = ['past', 'upcomming', 'latest', 'next']
                for (let list in schedule) {
                    return endpoint.get(`launches/${list}`)
                }
        } else if (launches_id != undefined) {
            return endpoint.getID('launches', launches_id)
        } else if (query != undefined) {
            return endpoint.post('launches', query)
        } else { 
            return endpoint.get('launches') 
        }
    }
    landpads (landpads_id = undefined, query = undefined) {
        if (landpads_id != undefined) {
            return endpoint.getID('landpads', landpads_id)
        } else if (query != undefined) {
            return endpoint.post('landpads', query)
        } else { return endpoint.get('landpads') }
    }
    payloads (payloads_id = undefined, query = undefined) {
        if (payloads_id != undefined) {
            return endpoint.getID('payloads', payloads_id)
        } else if (query != undefined) {
            return endpoint.post('payloads', query)
        } else { return endpoint.get('payloads') }
    }
    roadster () { return endpoint.get('roadster') }
    rockets (rockets_id = undefined, query = undefined) {
        if (rockets_id != undefined) {
            return endpoint.getID('rockets', rockets_id)
        } else if (query != undefined) {
            return endpoint.post('rockets', query)
        } else { return endpoint.get('rockets') }
    }
    ships (ships_id = undefined, query = undefined) {
        if (ships_id != undefined) {
            return endpoint.getID('ships', ships_id)
        } else if (query != undefined) {
            return endpoint.post('ships', query)
        } else { return endpoint.get('ships') }
    }
    starlink (starlink_id = undefined, query = undefined) {
        if (starlink_id != undefined) {
            return endpoint.getID('starlink', starlink_id)
        } else if (query != undefined) {
            return endpoint.post('starlink', query)
        } else { return endpoint.get('starlink') }
    }
}