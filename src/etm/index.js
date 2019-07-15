import { setInterval } from 'core-js';

const axios = require('axios')
const assert = require('assert')

const Communicator = function(options = {}){
    this.$client = null,
    this.callbacks = []
}

Communicator.prototype.run = function(callback){
    if(this.$client){
        callback()
    }
    else{
        this.callbacks.push(callback)
    }
}

Communicator.prototype.runDelay = function(){
    for(const callback of this.callbacks){
        callback()
    }
}

Communicator.prototype.auth = function(request, callback){
    var that = this
    axios.post('https://crm.etm-system.com/api/login', request)
        .then( response => {
            that.$client = axios.create({
                baseURL: 'https://crm.etm-system.com/api/air',
                timeout: response.data.max_timeout,
                headers: {
                    'etm-auth-key': response.data.etm_auth_key
                }
            })
            this.runDelay()
            callback(null, response.data)
        })
        .catch( error => callback(error, null) )
}

/** Method for getting airlines
 * @example
 * const etm = require('etm-air')
 * etm.airlines((error, airlines) => {
 *      if(error){
 *          throw error
 *      }
 *      else{
 *          console.log(airlines)
 *      }
 * })
 */
Communicator.prototype.airlines = function(callback){
    assert(callback, 'Missing callback')
    assert(typeof callback !== 'function', 'Callback should be a function')

    this.$client.get('/airlines')
        .then( response => callback(null, response.data) )
        .catch( error => callback(error, null) )
}

/** Methods for Search */
Communicator.prototype.search = function(request, callback){
    assert(callback, 'Missing callback')
    assert(typeof callback === 'function', 'Callback should be a function')

    this.run(() => {
        this.$client.post('/search', request)
            .then( response => callback(null, response.data) )
            .catch( error => callback(error, null) )
    })
}

/** Methods for Offers */
Communicator.prototype.offers = function(params, callback, matches = {}){
    assert(callback, 'Missing callback')
    assert(typeof callback === 'function', 'Callback should be a function')
    var match = (data, matches) => {
        for(const offers of data.offers){
            for(const offer of offers.offers){
                for(const segment of offer.segments){
                    var uuid = `${segment.arrival_timestamp}_${segment.departure_timestamp}_${segment.duration_minutes}_${segment.flight_number}`
                    if(matches[uuid] === undefined){
                        matches[uuid] = {}
                    }
                    if(!matches[uuid][segment.price]){
                        matches[uuid][segment.price] = segment
                    }
                }
            }
        }
        return matches
    }
    this.run(() => {
        this.$client.get('/offers', { params: params })
            .then(response => {
                matches = match(response.data, matches)
                console.log(matches)
                callback(null, response.data)
                if(response.data.status == 'InProcess'){
                    setTimeout(() => {
                        this.offers(params, callback)
                    }, 1000)
                }
            })
            .catch(error => callback(error, null))
    })
}

Communicator.prototype.offersSegment = function(segmentId, callback){
    assert(callback, 'Missing callback')
    assert(typeof callback !== 'function', 'Callback should be a function')

    this.$client.get('/offers' + segmentId)
        .then(response => callback(null, response.data))
        .catch(error => callback(error, null))
}

Communicator.prototype.offersAvailability = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/availability')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersFireFamily = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/ff')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersOtherPrice = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/other-price')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersAddToTrip = function(buyId, callback){

    this.$client.post('/offers/' + buyId + '/add_to_trip')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersRules = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/rules')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}


Communicator.prototype.offersServices = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/services')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersSeats = function(segmentId, callback){

    this.$client.get('/offers/' + segmentId + '/seats')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

export default Communicator