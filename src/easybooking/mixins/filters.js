
const Filters = function(tickets, lang = 'en'){
    if(!(this instanceof Filters)){
        return new Filters(tickets, lang)
    }
    console.log(tickets)
    this.tickets = tickets
    const sorts = {
        en: [{ text: 'by Price', code: 'PR' }, {text: 'Travel time', code: 'TT'}, { text: 'Early time', code: 'ET' }, { text: 'Late time', code: 'LT' }],
        ru: [{ text: 'По цене', code: 'PR' }, {text: 'По времени полета', code: 'TT'}, { text: 'По времени вылета', code: 'ET' }, { text: 'по времени прибытия', code: 'LT' }],
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
    var flightTime = []
    var durationTime = []
    for(var i = 0; 0 < this.tickets.length && i < this.tickets[0].length; i++){
        durationTime.push({})
        flightTime.push({})
    }
    for(const ticket of this.tickets){
        for(const index in ticket){
            // flight time
            if(flightTime[index].departure_min){
                if(flightTime[index].departure_min > ticket[index].departure_timestamp){
                    flightTime[index].departure_min = ticket[index].departure_timestamp
                }
                if(flightTime[index].departure_max < ticket[index].departure_timestamp){
                    flightTime[index].departure_max = ticket[index].departure_timestamp
                }
            }
            else{
                flightTime[index].departure_min = ticket[index].departure_timestamp
                flightTime[index].departure_max = ticket[index].departure_timestamp
            }
            if(flightTime[index].arrival_min){
                if(flightTime[index].arrival_min > ticket[index].arrival_timestamp){
                    flightTime[index].arrival_min = ticket[index].arrival_timestamp
                }
                if(flightTime[index].arrival_max < ticket[index].arrival_timestamp){
                    flightTime[index].arrival_max = ticket[index].arrival_timestamp
                }
            }
            else{
                flightTime[index].arrival_min = ticket[index].arrival_timestamp
                flightTime[index].arrival_max = ticket[index].arrival_timestamp
            }
            // duractionTime
            if(durationTime[index].min){
                if(durationTime[index].min > ticket[index].duration_minutes){
                    durationTime[index].min = ticket[index].duration_minutes
                }
            }
            else{
                durationTime[index].min = ticket[index].departure_timestamp
            }
            if(durationTime[index].max){
                if(durationTime[index].max < ticket[index].duration_minutes){
                    durationTime[index].max = ticket[index].duration_minutes
                }
            }
            else{
                durationTime[index].max = ticket[index].duration_minutes
            }
        }
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
    options.sorting = options.sorts[0].text
    for(const index in durationTime){
        durationTime[index].value = [durationTime[index].min, durationTime[index].max]
        flightTime[index].arrival_value = [flightTime[index].arrival_min, flightTime[index].arrival_max]
        flightTime[index].departure_value = [flightTime[index].departure_min, flightTime[index].departure_max]
    }
    options.durationTime = durationTime
    options.flightTime = flightTime
    if(this.options && this.options.num_tickets){
        options.num_tickets = this.options.num_tickets
    }
    else{
        options.num_tickets = 10
    }
    if(JSON.stringify(this.options) !== JSON.stringify(options)){
        this.options = options
    }
    this.copied = Object.assign({}, this.options)
}

Filters.prototype.search = function(){
    var tickets = []
    const checkAviacompany = (ticket) => {
        for(const segment of ticket){
            var info = segment.flights_info[0]
            if(this.options.aviacompanies[info.marketing_airline_code].value){
                return true
            }
        }
        return false
    }
    const flightTime = (ticket) => {
        for(const index in ticket){
            if(!(
                this.options.flightTime[index].arrival_value[0] <= ticket[index].arrival_timestamp &&
                ticket[index].arrival_timestamp <= this.options.flightTime[index].arrival_value[1] &&
                this.options.flightTime[index].departure_value[0] <= ticket[index].departure_timestamp &&
                ticket[index].departure_timestamp <= this.options.flightTime[index].departure_value[1]
            )){
                return false
            }
        }
        return true
    }
    const duractionMinutes = (ticket) => {
        for(const index in ticket){
            if(!(
                this.options.durationTime[index].value[0] <= ticket[index].duration_minutes &&
                ticket[index].duration_minutes <= this.options.durationTime[index].value[1]
            )){
                return false
            }
        }
        return true
    }
    const stops = (ticket) => {
        const isDirect = (ticket) => {
            for(const segment of ticket){
                if(segment.stops != 0){
                    return false
                }
            }
            return true
        }
        const hasStop = (ticket, number) => {
            var result = false
            for(const segment of ticket){
                if(segment.stops == number){
                    result = true
                }
            }
            return result
        }
        if(this.options.stops[0] && this.options.stops[0].value){
            if(isDirect(ticket)){
                return true
            }
        }
        for(var i = 1; i <= Math.max(...Object.keys(this.options.stops)); i++){
            if(this.options.stops[i] && this.options.stops[i].value){
                if(hasStop(ticket, i)){
                    return true
                }
            }
        }
        return false
    }
    const sort = (tickets) => {
        const sorting = ((options) => {
            for(const _type of options.sorts){
                if(_type.text == options.sorting){
                    return _type.code
                }
            }
        })(this.options)
        var algos = {
            PR: (tickets) => {
                tickets.sort((a, b) => {
                    if(a[a.length - 1].price < b[b.length - 1].price){
                        return -1
                    }
                    else{
                        return 1
                    }
                })
                return tickets
            },
            TT: (tickets) => {
                tickets.sort((a, b) => {
                    return b[b.length - 1].arrival_timestamp - a[0].departure_timestamp
                })
                return tickets
            },
            ET: (tickets) => {
                tickets.sort((a, b) => {
                    if(a[0].departure_timestamp < b[0].departure_timestamp){
                        return -1
                    }
                    else{
                        return 1
                    }
                })
                return tickets
            },
            LT: (tickets) => {
                tickets.sort((a, b) => {
                    if(a[a.length - 1].arrival_timestamp < b[b.length - 1].arrival_timestamp){
                        return -1
                    }
                    else{
                        return 1
                    }
                })
                return tickets
            }
        }
        return algos[sorting](tickets)
    }
    sort(this.tickets)
    for(const ticket of this.tickets){
        var price = this.options.price.value[0] <= ticket[ticket.length - 1].price && ticket[ticket.length - 1].price <= this.options.price.value[1]
        if(price && checkAviacompany(ticket) && flightTime(ticket) && duractionMinutes(ticket) && stops(ticket)){
            tickets.push([...ticket])
        }
        if(tickets.length >= this.options.num_tickets){
            return tickets
        }
    }
    return tickets
}

export default Filters