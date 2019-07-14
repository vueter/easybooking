import Axios from 'axios'

export default class Communicator {
  constructor () {
    this.authConfig = {
      login: 'xxx',
      password: 'yyyyyyy'
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
  getOrders (params, done) {
    if (this.config === null) {
      this.auth(result => {
        this.setConfig(result)
        this.getOrders(params, done)
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
  getOrderById (params, done) {
    if (this.config === null) {
      this.auth(result => {
        this.setConfig(result)
        this.getOrderById(params, done)
      })
    } else {
      this.$http({
        method: 'GET',
        url: 'https://crm.etm-system.com/api/air/orders/' + params['order_id'],
        headers: {
          'etm-auth-key': this.config['etm_auth_key']
        }
      }).then(response => {
        done(response.data)
      })
    }
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
        url: 'https://crm.etm-system.com/api/air/offers',
        params: params,
        headers: {
          'etm-auth-key': this.config['etm_auth_key']
        }
      }).then(response => {
        if (response.data.status === 'InProcess') {
          setTimeout(() => {
            this.getOffers(params, done)
          }, 1000)
        } else {
          done(response.data)
        }
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
