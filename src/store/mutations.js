export default {
    setFareFamily(state, payload){
        state.isFareFamily = true
        state.fareFamily = payload
    },
    setTicket(state, payload){
        state.ticket = payload
    },
    setSearchParameters(state, payload){
        state.searchParameters = payload
    },
    setBooked(state, payload){
        state.booked = payload
    },
    setRequestId(state, request_id){
        state.request_id = request_id
    }
}
