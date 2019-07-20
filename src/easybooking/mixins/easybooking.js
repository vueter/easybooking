export default {
  methods: {
    searchLocation (name, callback) {
      var prepare = function (items) {
        items = (function (items) {
          var result = []
          if (Array.isArray(items)) {
            return items
          } else {
            for (var index in items) {
              result.push(items[index])
            }
          }
          return result
        })(items)
        var result = []
        var counter = 0;
        for (const item of items) {
          if (Array.isArray(item)) {
            if (item[0].is_city == '1') {
              result.push({
                city: item[0].city_eng,
                name: item[0].name_eng,
                code: item[0].iata_code,
                items: [],
                id: counter
              })
              counter += 1
              if(counter == 5){
                return result
              }
              for (const sub_item of item.slice(1)) {
                result[result.length - 1].items.push(Object.assign({}, {
                  city: sub_item.city_eng,
                  name: sub_item.name_eng,
                  code: sub_item.iata_code,
                  id: counter + 1
                }))
                counter = counter + 1
                if(counter == 5){
                  return result
                }
              }
            } else {
              for (const sub_item of item) {
                result.push({
                  city: sub_item.city_eng,
                  name: sub_item.name_eng,
                  code: sub_item.iata_code,
                  items: null,
                  id: counter
                })
                counter += 1
                if(counter == 5){
                  return result
                }
              }
            }
          } else {
            if (item.city_eng) {
              result.push({
                city: item.city_eng,
                name: item.name_eng,
                code: item.iata_code,
                items: null,
                id: counter
              })
              counter += 1
              if(counter == 5){
                return result
              }
            } else {
              for (const index in item) {
                result.push({
                  city: item[index].city_eng,
                  name: item[index].name_eng,
                  code: item[index].iata_code,
                  items: null,
                  id: counter
                })
                counter += 1
                if(counter == 5){
                  return result
                }
              }
            }
          }
        }
        return result
      }
      this.$http.get('http://api.easybooking.uz/airport', {
        params: {
          query: name
        }
      }).then(response => {
        callback(prepare(response.data))
      }).catch(() => {
        callback([])
      })
    },
    getPhoneCodes(callback){
      this.$http.get('http://api.easybooking.uz/country')
        .then(response => callback(null, response.data))
        .catch(error => callback(error, null))
    }
  }
}
