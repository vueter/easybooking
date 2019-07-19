<template>
    <v-dialog v-model="dialog" persistent max-width="900px">
        <v-card>
            <v-layout row>
                <v-flex md4 ma-1 v-for="(rule, index) in rules" v-bind:key="'rule_' + index">
                    <v-card>
                        <v-card-text>
                            {{ rule }}
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
    name: 'easybooking-ticket-rules',
    data: () => ({
        dialog: false,
        rules: [],
    }),
    methods: {
        open(rules){
            this.rules = rules
            this.dialog = true
        }
    }
}
</script>
