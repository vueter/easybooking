export default {
    setFareFamily(state, payload){
        state.isFareFamily = true
        state.fareFamily = payload
    },
    setTicket(state, payload){
        state.ticket = payload
    }
}
