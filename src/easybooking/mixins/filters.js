
const Filters = function(tickets, lang = 'en'){
    if(!(this instanceof Filters)){
        return new Filters(tickets, lang)
    }
    this.tickets = tickets
    const sorts = {
        en: [{ text: 'by Price', code: 'PR' }, {text: 'Travel time', code: 'TT'}, { text: 'Early time', code: 'ET' }, { text: 'Late time', code: 'LT' }]
    }
    this.sorts = sorts[lang]
    this.stops = {}
    this.price = {}
    this.aviacompanies = {}
    var options = {
        sorts: [...this.sorts],
        stops: [],
        aviacompanies: [],
        price: {
            min: null,
            max: null
        },
        flightTime: [],
        durationTime: []
    }
    var price = {}
    var flightTime = {}
    var durationTime = {}
    for(const ticket of this.tickets){
        // duractionTime
        if(durationTime.min){
            if(durationTime.min > ticket.duration_minutes){
                durationTime.min = ticket.duration_minutes
            }
        }
        else{
            durationTime.min = ticket.departure_timestamp
        }
        if(durationTime.max){
            if(durationTime.max < ticket.duration_minutes){
                durationTime.max = ticket.duration_minutes
            }
        }
        else{
            durationTime.max = ticket.duration_minutes
        }
        // flight time
        if(flightTime.min){
            if(flightTime.min > ticket.departure_timestamp){
                flightTime.min = ticket.departure_timestamp
            }
        }
        else{
            flightTime.min = ticket.departure_timestamp
        }
        if(flightTime.max){
            if(flightTime.max > ticket.arrival_timestamp){
                flightTime.max = ticket.arrival_timestamp
            }
        }
        else{
            flightTime.max = ticket.arrival_timestamp
        }
        
        // aviacompanies
        var info = ticket.flights_info[0]
        if(this.aviacompanies[info.marketing_airline_code]){
            if(this.aviacompanies[info.marketing_airline_code].price > ticket.price){
                this.aviacompanies[info.marketing_airline_code].price = ticket.price
            }
        }
        else{
            this.aviacompanies[info.marketing_airline_code] = {
                name: info.marketing_airline_name,
                price: ticket.price
            }
        }
        // stops
        if(this.stops[ticket.stops]){
            if(this.stops[ticket.stops] > ticket.price){
                this.stops[ticket.stops] = ticket.price
            }
        }
        else{
            this.stops[ticket.stops] = ticket.price
        }

        // price
        if(price.min){
            if(price.min > ticket.price){
                price.min = ticket.price
            }
        }
        else{
            price.min = ticket.price
        }

        if(price.max){
            if(price.max < ticket.price){
                price.max = ticket.price
            }
        }
        else{
            price.max = ticket.price
        }

    }
    this.price = price
    for(const number in this.stops){
        options.stops.push({
            number: parseInt(number),
            price: this.stops[number]
        })
    }
    options.price = Object.assign({}, this.price)
    for(const code in this.aviacompanies){
        var aviacompany = this.aviacompanies[code]
        aviacompany.code = code
        options.aviacompanies.push(Object.assign({}, aviacompany))
    }
    options.flightTime.push(flightTime)
    options.durationTime.push(durationTime)
    this.options = options
}

Filters.prototype.match = function(options){

}

export default Filters