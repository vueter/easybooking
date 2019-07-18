
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
        stops: {},
        aviacompanies: {},
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
        /*// duractionTime
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
        if(flightTime.departure_min){
            if(flightTime.departure_min > ticket.departure_timestamp){
                flightTime.departure_min = ticket.departure_timestamp
            }
            if(flightTime.departure_max < ticket.departure_timestamp){
                flightTime.departure_max = ticket.departure_timestamp
            }
        }
        else{
            flightTime.departure_min = ticket.departure_timestamp
            flightTime.departure_max = ticket.departure_timestamp
        }
        if(flightTime.arrival_min){
            if(flightTime.arrival_min > ticket.arrival_timestamp){
                flightTime.arrival_min = ticket.arrival_timestamp
            }
            if(flightTime.arrival_max < ticket.arrival_timestamp){
                flightTime.arrival_max = ticket.arrival_timestamp
            }
        }
        else{
            flightTime.arrival_min = ticket.arrival_timestamp
            flightTime.arrival_max = ticket.arrival_timestamp
        }
        */
        // aviacompanies +
        for(const segment of ticket){
            var info = segment.flights_info[0]
            if(this.aviacompanies[info.marketing_airline_code]){
                if(this.aviacompanies[info.marketing_airline_code].price > ticket[ticket.length - 1].price){
                    this.aviacompanies[info.marketing_airline_code].price = ticket[ticket.length - 1].price
                }
            }
            else{
                this.aviacompanies[info.marketing_airline_code] = {
                    name: info.marketing_airline_name,
                    price: ticket[ticket.length - 1].price
                }
            }
        }
        // stops +
        for(const segment of ticket){
            if(this.stops[segment.stops]){
                if(this.stops[segment.stops] > segment.price){
                    this.stops[segment.stops] = segment.price
                }
            }
            else{
                this.stops[segment.stops] = segment.price
            }
        }

        // price +
        if(price.min){
            if(price.min > ticket[ticket.length - 1].price){
                price.min = ticket[ticket.length - 1].price
            }
        }
        else{
            price.min = ticket[ticket.length - 1].price
        }

        if(price.max){
            if(price.max < ticket[ticket.length - 1].price){
                price.max = ticket[ticket.length - 1].price
            }
        }
        else{
            price.max = ticket[ticket.length - 1].price
        }

    }
    this.price = price
    for(const number in this.stops){
        var price = this.stops[number]
        options.stops[number] = {
            value: true,
            number: parseInt(number),
            price: price
        }
    }
    options.price = Object.assign({}, this.price)
    options.price.value = [options.price.min, options.price.max]
    for(const code in this.aviacompanies){
        var aviacompany = this.aviacompanies[code]
        aviacompany.code = code
        aviacompany.value = true
        options.aviacompanies[code] = aviacompany
    }
    flightTime.departure_value = [flightTime.departure_min, flightTime.departure_max]
    flightTime.arrival_value = [flightTime.arrival_min, flightTime.arrival_max]
    durationTime.value = [durationTime.min, durationTime.max]
    options.flightTime.push(flightTime)
    options.durationTime.push(durationTime)
    options.sorting = options.sorts[0].text
    if(this.options && this.options.num_tickets){
        options.num_tickets = this.options.num_tickets
    }
    else{
        options.num_tickets = 10
    }
    if(JSON.stringify(this.options) !== JSON.stringify(options)){
        this.options = options
    }
}

Filters.prototype.search = function(){
    return this.tickets
    function flightTime(options, ticket){
        for(const option of options){
            if(option.arrival_value[0] > ticket.arrival_timestamp || option.arrival_value[1] < ticket.arrival_timestamp){
                return false
            }
            if(option.departure_value[0] > ticket.departure_timestamp || option.departure_timestamp < ticket.departure_timestamp ){
                return false
            }
        }
        return true
    }

    function durationTime(options, ticket){
        for(const option of options){
            if(option.value[0] > ticket.duration_minutes || option.value[1] < ticket.duration_minutes){
                return false
            }
        }
        return true
    }

    var tickets = []
    for(const ticket of this.tickets){
        var info = ticket.flights_info[0]
        if(
            this.options.stops[ticket.stops].value &&
            this.options.aviacompanies[info.marketing_airline_code].value &&
            this.options.price.value[0] < ticket.price && ticket.price < this.options.price.value[1] &&
            flightTime(this.options.flightTime, ticket) &&
            durationTime(this.options.durationTime, ticket)
        ){
            tickets.push(Object.assign({}, ticket))
            if(tickets.length >= this.options.num_tickets){
                return tickets
            }
        }
    }
    return tickets
}

export default Filters