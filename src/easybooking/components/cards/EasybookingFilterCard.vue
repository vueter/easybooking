<template>
    <v-card class="filters">
        <v-card-title>
            Sort
        </v-card-title>
        <v-card-text>
            <v-overflow-btn v-bind:items="filterOptions.sorts" v-model="filterOptions.sorting"></v-overflow-btn>
        </v-card-text>
        <v-card-title>
            Stops
        </v-card-title>
        <v-list>
            <v-list-tile v-on:click="() => {}" v-for="(stop, index) in filterOptions.stops" v-bind:key="'stop_' + index">
                <v-list-tile-content>
                    <v-checkbox color="primary" v-model="stop.value" v-bind:ripple="false" v-bind:label="stop.number ? (stop.number + ' stop' + (stop.number !== 1 ? 's' : '')) : 'Direct'"/>
                </v-list-tile-content>
                <v-list-tile-action>
                    {{ stop.price }}
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
        <v-card-title>
            Price
        </v-card-title>
        <v-card-text>
            <v-range-slider
                v-bind:min="filterOptions.price.min"
                v-bind:max="filterOptions.price.max"
                v-model="filterOptions.price.value" />
        </v-card-text>
        <v-card-title>
            Flight time
        </v-card-title>
        <v-card-text v-for="(flight, index) in filterOptions.flightTime" v-bind:key="'flight_time_' + index">
            <v-range-slider
                v-if="flight.departure_min !== flight.departure_max"
                v-bind:min="flight.departure_min"
                v-bind:max="flight.departure_max"
                v-model="flight.departure_value" />
            <v-range-slider
                v-if="flight.arrival_min !== flight.arrival_max"
                v-bind:min="flight.arrival_min"
                v-bind:max="flight.arrival_max"
                v-model="flight.arrival_value" />
        </v-card-text>
        <v-card-title>
            Duration time
        </v-card-title>
        <v-card-text>
            <v-range-slider
                v-for="(duration, index) in filterOptions.durationTime"
                v-bind:key="'duration_' + index"
                v-bind:min="duration.min"
                v-bind:max="duration.max"
                v-model="duration.value" />
        </v-card-text>
        <v-card-title>
            Aviacompanies
        </v-card-title>
        <v-list>
            <v-list-tile v-on:click="() => {}" v-for="(aviacompany, index) in filterOptions.aviacompanies" v-bind:key="'aeroports_' + index">
                <v-list-tile-content>
                    <v-checkbox v-model="aviacompany.value" color="primary" v-bind:ripple="false" v-bind:label="aviacompany.name"/>
                </v-list-tile-content>
                <v-list-tile-action>
                    {{ aviacompany.price }}
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
    </v-card>
</template>
<script>
export default {
    name: 'easybooking-filter-card',
    props: {
        filterOptions: {
            type: Object,
        },
        filter: {
            type: Function,
            default: () => {}
        }
    },
    data: () => ({
        sorts: [{text: 'Price'}, {text: 'Travel time'}, {text: 'Early time'}, {text: 'Late time'}]
    })
}
</script>
<style lang="scss">
.filters{
    margin-top: 10px;
}
</style>

