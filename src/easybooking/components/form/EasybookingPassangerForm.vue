<template>
  <v-layout row wrap>
    <v-flex md4 pa-1>
      <v-text-field box label="Фамилия" v-model="surname"/>
    </v-flex>
    <v-flex md4 pa-1>
      <v-text-field box label="Имя" v-model="name"/>
    </v-flex>
    <v-flex md4 pa-1>
      <v-menu v-model="birthday_menu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field label="Дата рождения" v-model="birthday" append-icon="event" readonly box v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="birthday" no-title scrollable v-on:input="birthday_menu = false"/>
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
      <v-autocomplete v-bind:items="documents" v-model="document" item-text="text" box label="Тип документа" v-bind:disabled="!citizenship"/>
    </v-flex>
    <v-flex md4 pa-1>
      <v-text-field box v-model="document_number" label="Номер документа" />
    </v-flex>
    <v-flex md4 pa-1>
      <v-menu v-model="document_issue_menu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field label="Дата выдачи документа" v-model="document_issue" append-icon="event" readonly box v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="document_issue" no-title scrollable v-on:input="document_issue_menu = false"/>
      </v-menu>
    </v-flex>
    <v-flex md4 pa-1>
      <v-menu v-model="document_expire_menu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field label="Дата выдачи документа" v-model="document_expire" append-icon="event" readonly box v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="document_expire" no-title scrollable v-on:input="document_expire_menu = false"/>
      </v-menu>
    </v-flex>
    <v-flex md4>
      <slot name="save"></slot>
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
      },
      pcc_name: {
        type: String,
        default: 'Default'
      },
      type: String
		},
    data: () => ({
			doc_types: [],
      toggle_exclusive: 0,
      birthday_menu: false,
      birthday: null,
      document_issue: null,
      document_issue_menu: false,
      document_expire: null,
      document_expire_menu: false,
			name: '',
			surname: '',
			citizenship: null,
      citizenship_code: null,
      document: null,
      document_code: null,
      document_number: '',
			documents: []
		}),
		watch: {
			citizenship(){
				for(const code of this.codes){
					if(code.country_rus == this.citizenship){
            this.citizenship_code = code.code
            this.documents = this.getDocumentTypes()
					}
				}
      },
      document(){
        for(const document of this.documents){
          if(document.text == this.document){
            this.document_code = document.code
          }
        }
      }
		},
		methods: {
      getPassanger(){
        return {
          email: '',
          first_name: this.name,
          last_name: this.surname,
          middle_name: '',
          gender: this.toggle_exclusive == 0 ? 'M' : 'F',
          birth_date: this.birthday,
          citizenship: this.citizenship_code,
          type: this.type,
          document: {
            type: this.document_code,
            number: this.document_number,
            issue: this.document_issue,
            expire: this.document_expire
          },
          frequent_numbers: [],
          seats: []
        }
      },
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