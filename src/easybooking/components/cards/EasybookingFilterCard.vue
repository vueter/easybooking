<template>
    <v-card class="filters">
        <v-card-title>
            Sort
        </v-card-title>
        <v-card-text>
            <v-overflow-btn v-bind:items="sorts"></v-overflow-btn>
            {{ filterOptions }}
        </v-card-text>
        <v-card-title>
            Stops
        </v-card-title>
    </v-card>
</template>
<script>
export default {
    name: 'easybooking-filter-card',
    props: {
        filterOptions: Object,
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

