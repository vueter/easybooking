<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Данные пассажиров
    </v-card-title>
    <v-card-text>
      Данные заполняются латинскими буквами, как в документе, по которому будет осуществляться перелет.
      {{searchParameters}}
    </v-card-text>
    <v-tabs fixed-tabs show-arrows v-model="correntTap">
      <v-tab v-for="n in searchParameters.adult_qnt" v-bind:key="n">
        ADT {{ n }}
      </v-tab>
      <v-tab v-for="n in searchParameters.child_qnt" v-bind:key="searchParameters.adult_qnt + n">
        CHILD {{ n }}
      </v-tab>
      <v-tab v-for="n in searchParameters.infant_qnt" v-bind:key="searchParameters.adult_qnt + searchParameters.infant_qnt + n">
        INFANT {{ n }}
      </v-tab>
      <v-tabs-items v-model="correntTap">
        <v-tab-item 
          v-for="i in searchParameters.adult_qnt" 
          v-bind:key="i">
          {{i}}
          <v-card-text>
            <v-divider></v-divider>
            <font class="eb-divider-txt">№ {{i}} ADT</font>
          </v-card-text>
          <v-card-text>
            <easybooking-passanger-form v-bind:ref="i" v-bind:codes="codes"/>
          </v-card-text>
        </v-tab-item>
        <v-tab-item 
          v-for="i in searchParameters.child_qnt" 
          v-bind:key="searchParameters.adult_qnt + i">
          {{searchParameters.adult_qnt + i}}
          <v-card-text>
            <v-divider></v-divider>
            <font class="eb-divider-txt">№ {{searchParameters.adult_qnt + i}} CHILD</font>
          </v-card-text>
          <v-card-text>
            <easybooking-passanger-form v-bind:ref="searchParameters.adult_qnt + i" v-bind:codes="codes"/>
          </v-card-text>
        </v-tab-item>
        <v-tab-item
          v-for="i in searchParameters.infant_qnt" 
          v-bind:key="searchParameters.adult_qnt + searchParameters.child_qnt + i">
          {{searchParameters.adult_qnt + searchParameters.child_qnt + i}}
          <v-card-text>
            <v-divider></v-divider>
            <font class="eb-divider-txt">№ {{searchParameters.adult_qnt + searchParameters.child_qnt + i}} infant</font>
          </v-card-text>
          <v-card-text>
            <easybooking-passanger-form v-bind:ref="searchParameters.adult_qnt + searchParameters.child_qnt + i" v-bind:codes="codes"/>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-passanger-card',
  props: {
    codes: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    correntTap: 0
  }),
  computed: {
    searchParameters(){
      console.log('getting')
      console.log(this.$store.state)
      return this.$store.state.searchParameters
    }
  }
}
</script>
