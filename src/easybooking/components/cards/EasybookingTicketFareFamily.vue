<template>
    <v-dialog v-model="dialog" persistent max-width="900px">
        <v-card>
            <v-layout row>
                <v-flex md4 ma-1 v-for="(ff, index) in fareFamily" v-bind:key="index + (loadings[index] ? '_true' : '_false')">
                    <v-card>
                        <v-toolbar card>
                            <v-toolbar-title>
                                {{ ff.components[0].name }}
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            {{ ff.components[0] }}
                        </v-card-text>
                        <v-card-text>
                            <v-btn block large color="primary" v-on:click="booking(ff, index)" v-bind:loading="loadings[index]">{{ ff.price.total_amount }}</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'easybooking-ticket-ff',
    data: () => ({
        dialog: false,
        fareFamily: [],
        ticket: [],
        loadings: []
    }),
    methods: {
        open(fareFamily, ticket){
            var loadings = []
            for(const _ of fareFamily){
                loadings.push(false)
            }
            this.loadings = loadings
            this.fareFamily = fareFamily
            this.dialog = true
            this.ticket = ticket
        },
        booking(segment, index){
            this.loadings[index] = true
            this.$forceUpdate()
            this.$etm.offersAvailability(segment.segments, (error, result) => {
                this.loadings[index] = false
                if(result.availability){
                    this.$store.commit('setFareFamily', segment)
                    this.$store.commit('setTicket', this.ticket)
                    this.$router.push({
                        path: '/booking/' + this.$route.params.id + '/' + segment.segments
                    })
                }
            })
        }
    }
}
</script>

