<template>
  <v-layout row wrap>
    <v-flex md4 pa-1>
      <v-text-field box label="Фамилия" v-model="surname"/>
    </v-flex>
    <v-flex md4 pa-1>
      <v-text-field box label="Имя" v-model="name"/>
    </v-flex>
    <v-flex md4 pa-1>
      <v-menu ref="menu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field label="Дата рождения" v-model="birthday" append-icon="event" readonly box v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="birthday" no-title scrollable />
      </v-menu>
    </v-flex>
    <v-flex md4 pa-1>
      <font>Пол</font>
      <v-btn-toggle v-model="toggle_exclusive" class="full-width">
        <v-btn flat class="half-width">
          Мужской
        </v-btn>
        <v-btn flat class="half-width">
          Женский
        </v-btn>
      </v-btn-toggle>
    </v-flex>
    <v-flex md4 pa-1>
			<v-autocomplete v-bind:items="codes" v-model="citizenship" item-text="country_rus" label="Страна выдачи" box></v-autocomplete>
    </v-flex>
    <v-flex md4 pa-1>
      <v-autocomplete v-bind:items="documents" box label="Тип документа" v-bind:disabled="!citizenship"/>
    </v-flex>
    <v-flex md4 pa-1>
      <v-text-field box label="Номер документа" />
    </v-flex>
    <v-flex md4 pa-1>
      <v-menu ref="menu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field label="Дата выдачи документа" append-icon="event" readonly box v-on="on"></v-text-field>
        </template>
        <v-date-picker no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex md4 pa-1>
      <v-menu ref="menu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field label="Срок действия документа" append-icon="event" readonly box v-on="on"></v-text-field>
        </template>
        <v-date-picker no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
		name: 'easybooking-passanger-form',
		props: {
			codes: {
				tyep: Array,
				default: []
			}
		},
    data: () => ({
			doc_types: [],
			toggle_exclusive: 2,
			birthday: null,
			name: '',
			surname: '',
			citizenship: null,
			citizenship_code: null,
			documents: []
		}),
		watch: {
			citizenship(){
				for(const code of this.codes){
					if(code.country_rus == this.citizenship){
						console.log(code)
					}
				}
			}
		},
		methods: {
			getDocumentTypes(){
				var docs = [
					{code: 'PSP', text: 'Заграничный паспорт'},
					{code: 'NP', text: 'Национальный паспорт'},
					{code: 'DP', text: 'Дипломатический паспорт'},
				]
				if(this.pcc_name === 'Delta' || this.pcc_name === 'Sigma' || this.pcc_name === 'Tetra'){
					if(this.citizenship_code === 'ru'){
						docs = [
							{code: 'PSP', text: 'Заграничный паспорт'},
							{code: 'PS',  text: 'Паспорт внутренний'},
							{code: 'DP',  text: 'Дипломатический паспорт'},
						]
					}
					else{
						docs = [
							{code: 'ZC', text: 'Заграничный паспорт не РФ'},
							{code: 'NP', text: 'Национальный паспорт'},
							{code: 'DP', text: 'Дипломатический паспорт'},
						]
					}
				}
				return docs
			}
		}
  }
</script>