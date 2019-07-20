<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Данные покупателя
    </v-card-title>
    <v-card-text>
      Введите действующий адрес электронной почты для отправки билета, а так же номер мобильного телефона для связи в случае изменений.
    </v-card-text>
    <v-card-text>
      <v-layout wrap>
        <v-flex md3 pa-1>
          <v-text-field v-model="full_name" label="Полное имя" />
        </v-flex>
        <v-flex md3 pa-1>
          <v-text-field v-model="email" label="E-mail" />
        </v-flex>
        <v-flex>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" depressed block>+{{phone_code}} <v-icon>$vuetify.icons.dropdown</v-icon></v-btn>
            </template>
            <v-list class="phone-codes">
              <v-list-tile v-for="(code, index) in codes" v-bind:key="index" v-on:click="select(code)">
                <v-list-tile-content>
                  {{code.country_rus}} (+{{code.phone_code}})
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex md4 pa-1>
          <v-text-field class="es-phone-number" v-model="phonenumber" v-bind:mask="mask" label="Номер телефона"/>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
import easybooking from '@/easybooking/mixins/easybooking'
export default {
  name: 'easybooking-buyer-card',
  mixins: [easybooking],
  data: () => ({
    full_name: '',
    email: '',
    phonenumber: '',
    code: 'UZ',
    phone_code: '998',
    mask: '(##) ###-##-##',
    codes: []
  }),
  methods: {
    getBuyer(){
      return {
        phone: {
          code: this.code,
          number: this.phonenumber,
          extra: ''
        },
        emails: [
          this.email
        ],
        address: {
          zip: '',
          country: '',
          city: '',
          additional: ''
        }
      }
    },
    select(item){
      this.code = item.code
      this.phone_code = item.phone_code
      this.mask = item.phone_mask
    }
  },
  mounted(){
    this.getPhoneCodes((error, result) => {
      if(error){
        this.$etm.alert('Could not get phene codes')
      }
      else{
        this.codes = result.data
      }
    })
  }
}
</script>
<style>
.es-phone-code .v-text-field__prefix{
  padding-right: 0px;
}
.es-phone-code .v-select__selection--comma:first-child{
  margin-left: 0px;
}
.phone-codes{
  height: 400px;
  overflow-y: auto;
}
</style>
