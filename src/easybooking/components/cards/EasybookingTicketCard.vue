<template>
    <v-card style="margin-bottom: 10px">
        <v-card-text>
            {{ ticket }}
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'easybooking-ticket-card',
    props: {
        ticket: Object
    }
}
</script>