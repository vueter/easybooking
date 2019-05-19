<template>
    <v-card class="offer-card" style="">
        {{ offer }}
        <v-layout row class="fh">
            <div class="offer-open-btn">
                <v-icon color="white">$vuetify.icons.dropdown</v-icon>
            </div>
            <div class="main">
                <v-layout>
                    <v-flex md4 class="fh">
                        <img :src="offer.carrier_logo">
                    </v-flex>
                    <v-flex md8 class="fh">
                        {{ offer.offers[0].segments[0].departure_airport }}
                        {{ offer.offers[0].segments[0].departure_date }}
                        {{ offer.offers[0].segments[0].departure_time }}
                        {{ offer.offers[offer.offers.length - 1].segments[0].arrival_airport }}
                        {{ offer.offers[offer.offers.length - 1].segments[0].arrival_date }}
                        {{ offer.offers[offer.offers.length - 1].segments[0].arrival_time }}
                        {{ getDurationTime(offer) }}
                        {{ getLocations(offer) }}
                    </v-flex>
                </v-layout>
            </div>
            <div class="fh offer-card-price">
                B
            </div>
        </v-layout>
    </v-card>
</template>
<script>
export default {
    name: 'EasybookingOfferCard',
    props: {
        offer: {
            type: Object
        }
    },
    methods: {
        getDurationTime(offer){
            var minutes = 0;
            for(const _offer of offer.offers){
                for(const segment of _offer.segments){
                    minutes += segment.duration_minutes
                }
            }
            var m = minutes % 60;
            minutes = parseInt(minutes / 60)
            var h = minutes % 24;
            minutes = parseInt(minutes / 24)
            var d = parseInt(minutes / 24)
            if(m < 10){ m = '0' + m }
            if(h < 10){ h = '0' + h }
            if(d > 0){ return d + ' д ' + h + ' ч ' + m + ' мин' }
            return h + ' ч ' + m + ' мин'
        },
        getLocations(offer){
            var locations = [];
            for(const _offer of offer.offers){
                for(const segment of _offer.segments){
                    locations.push({
                        arrival_airport: segment.arrival_airport,
                        arrival_date: segment.arrival_date,
                        arrival_time: segment.arrival_time,
                        departure_airport : segment.departure_airport,
                        departure_date: segment.departure_date,
                        departure_time: segment.departure_time
                    })
                }
            }
            console.log(locations)
        }
    }
}
</script>

<style>
.offer-card{
    box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
    background-color: white;border-radius: 4px !important;
    margin-bottom: 20px;
}
.main{
    position: flex;
    width:calc(100% - 170px)
}
.offer-open-btn{
    height: 100%;
    width: 20px;
    background-color: #0FB8D3;
    min-height: 100px;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.offer-open-btn .v-icon{
    font-size: 20px;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translate(0px, -50%);
}
.fh{
    height: 100px !important;
}
.offer-card-price{
    border-left: 1px dotted #DBDBDB;
    width: 150px;
}
</style>
