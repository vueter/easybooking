import Axios from 'axios'

export default class Communicator {
  constructor () {
    this.authConfig = {
      login: 'vue',
      password: 'w2Uq8VRlia'
    }
    this.config = null
    this.$http = Axios
  }
  auth (done) {
    this.$http({
      method: 'POST',
      url: 'https://crm.etm-system.com/api/login',
      params: this.authConfig
    }).then(response => {
      done(response.data)
    })
  }
  setConfig (config) {
    this.config = config
  }
  getOffers (params, done) {
    if (this.config === null) {
      this.auth(result => {
        this.setConfig(result)
        this.getOffers(params, done)
      })
    } else {
      this.$http({
        method: 'GET',
        url: 'https://crm.etm-system.com/api/air/orders',
        params: params,
        headers: {
          'etm-auth-key': this.config['etm_auth_key']
        }
      }).then(response => {
        done(response.data)
      })
    }
  }
  getDirectives (queryWord, done) {
    this.$http({
      method: 'GET',
      url: 'https://easybooking.uz/airport/list',
      params: { query: queryWord },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => {
      done(response)
    })
  }
  search (request, done) {
    if (this.config === null) {
      this.auth(result => {
        this.setConfig(result)
        this.search(request, done)
      })
    } else {
      this.$http({
        method: 'POST',
        url: 'https://crm.etm-system.com/api/air/search',
        data: request,
        headers: {
          'etm-auth-key': this.config['etm_auth_key']
        }
      }).then(response => {
        done(response.data)
      })
    }
  }
}
