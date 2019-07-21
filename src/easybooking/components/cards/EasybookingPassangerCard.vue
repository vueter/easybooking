<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Данные пассажиров
    </v-card-title>
    <v-card-text>
      Данные заполняются латинскими буквами, как в документе, по которому будет осуществляться перелет.
    </v-card-text>
    <v-card-text>
      <v-btn 
        v-for="n in searchParameters.adult_qnt" 
        v-bind:key="n" v-on:click="correntTap = n - 1">
        {{texts[n - 1]}}
      </v-btn>
      <v-btn 
        v-for="n in searchParameters.child_qnt" 
        v-bind:key="searchParameters.adult_qnt + n" 
        v-on:click="correntTap = searchParameters.adult_qnt + n - 1">
        {{texts[searchParameters.adult_qnt + n - 1]}}
      </v-btn>
      <v-btn 
        v-for="n in searchParameters.infant_qnt" 
        v-bind:key="searchParameters.adult_qnt + searchParameters.infant_qnt + n + 1" 
        v-on:click="correntTap = searchParameters.adult_qnt + searchParameters.infant_qnt + n">
        {{texts[searchParameters.adult_qnt + searchParameters.infant_qnt + n]}}
      </v-btn>
    </v-card-text>
    <v-tabs fixed-tabs show-arrows v-model="correntTap">
      <v-tabs-items v-model="correntTap">
        <v-tab-item 
          v-for="i in searchParameters.adult_qnt" 
          v-bind:key="i">
          <v-card-text>
            <v-divider></v-divider>
            <font class="eb-divider-txt">№ {{i}} ADT</font>
          </v-card-text>
          <v-card-text>
            <easybooking-passanger-form v-bind:ref="i" type="ADT" v-bind:codes="codes" v-bind:pcc_name="ticket[ticket.length - 1].pcc_name">
              <template v-slot:save="on">
                <v-btn v-on:click="save(i, i - 1)">Save</v-btn>
              </template>
            </easybooking-passanger-form>
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
            <easybooking-passanger-form v-bind:ref="searchParameters.adult_qnt + i" type="CHD" v-bind:codes="codes" v-bind:pcc_name="ticket[ticket.length - 1].pcc_name">
              <template v-slot:save="on">
                <v-btn v-on:click="save(searchParameters.adult_qnt + i, searchParameters.adult_qnt + i - 1)">Save</v-btn>
              </template>
            </easybooking-passanger-form>
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
            <easybooking-passanger-form v-bind:ref="searchParameters.adult_qnt + searchParameters.child_qnt + i" type="INF" v-bind:codes="codes" v-bind:pcc_name="ticket[ticket.length - 1].pcc_name">
              <template v-slot:save="on">
                <v-btn v-on:click="save(searchParameters.adult_qnt + searchParameters.child_qnt + i, searchParameters.adult_qnt + searchParameters.child_qnt + i - 1)">Save</v-btn>
              </template>
            </easybooking-passanger-form>
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
    },
    ticket: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    correntTap: 0,
    texts: []
  }),
  methods: {
    save(ref, text){
      this.texts[text] = this.$refs[ref][0].surname + ' ' + this.$refs[ref][0].name
      this.$forceUpdate()
    },
    getPassangers(){
      var passangers = []
      for(const i in this.$refs){
        var comp = this.$refs[i][0]
        passangers.push( comp.getPassanger() )
      }
      return passangers
    }
  },
  computed: {
    searchParameters(){
      var params = this.$store.state.searchParameters
      for(var i = 0; i < params.adult_qnt; i++){
        this.texts.push(`ADULT ${i + 1}`)
      }
      for(var i = 0; i < params.child_qnt; i++){
        this.texts.push(`CHILD ${i + 1}`)
      }
      for(var i = 0; i < params.infant_qnt; i++){
        this.texts.push(`INFANT ${i + 1}`)
      }
      return params
    }
  }
}
</script>
