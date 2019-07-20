<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Данные пассажиров
    </v-card-title>
    <v-card-text>
      Данные заполняются латинскими буквами, как в документе, по которому будет осуществляться перелет.
    </v-card-text>
    <v-card-text>
      <v-layout row wrap>
        <v-flex md4 pa-1>
          <v-text-field label="№ 1 Взрослый" placeholder="Добавить данные" box />
        </v-flex>
        <v-flex md4 pa-1>
          <v-text-field label="№ 2 Взрослый" placeholder="Джон Сноу" box />
        </v-flex>
        <v-flex md4 pa-1>
          <v-text-field label="№ 1 Ребенок" placeholder="Добавить данные" box />
        </v-flex>
      </v-layout>
    </v-card-text>
    {{searchParameters}}
    <template v-for="i in searchParameters.adult_qnt">
      <v-card-text v-bind:key="'passanger-card-header_adt' + i">
        <v-divider></v-divider>
        <font class="eb-divider-txt">№ {{i}} ADT</font>
      </v-card-text>
      <v-card-text v-bind:key="'passanger-card-body_adt' + i">
        <easybooking-passanger-form ref="passanger" v-bind:codes="codes"/>
      </v-card-text>
    </template>
    <template v-for="i in searchParameters.child_qnt">
      <v-card-text v-bind:key="'passanger-card-header_child' + i">
        <v-divider></v-divider>
        <font class="eb-divider-txt">№ {{searchParameters.adult_qnt + i}} CHILD</font>
      </v-card-text>
      <v-card-text v-bind:key="'passanger-card-body_child' + i">
        <easybooking-passanger-form ref="passanger" v-bind:codes="codes"/>
      </v-card-text>
    </template>
    <template v-for="i in searchParameters.infant_qnt">
      <v-card-text v-bind:key="'passanger-card-header_infant' + i">
        <v-divider></v-divider>
        <font class="eb-divider-txt">№ {{ searchParameters.adult_qnt + searchParameters.child_qnt + i}} infant</font>
      </v-card-text>
      <v-card-text v-bind:key="'passanger-card-body_infant' + i">
        <easybooking-passanger-form ref="passanger" v-bind:codes="codes"/>
      </v-card-text>
    </template>
    <v-card-text>
      <v-layout row>
        <v-flex md4 pa-1>
          <v-btn color="primary" outline block large>
            Сохранить
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
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
  computed: {
    searchParameters(){
      return this.$store.state.searchParameters
    }
  }
}
</script>
