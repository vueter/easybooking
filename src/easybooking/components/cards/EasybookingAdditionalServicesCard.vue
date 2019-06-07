<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Дополнительные услуги
    </v-card-title>
    <v-card-text>
      <v-card flat class="bordered-card" v-for="i in 4" v-bind:key="i">
        <v-card-text>
          <v-layout row>
            <svg width="66" height="57" viewBox="0 0 66 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.0003 13.6667H7.33366C5.56555 13.6667 3.86986 14.3691 2.61961 15.6193C1.36937 16.8696 0.666992 18.5653 0.666992 20.3334V33.6667C0.666992 35.4348 1.36937 37.1305 2.61961 38.3807C3.86986 39.631 5.56555 40.3334 7.33366 40.3334H10.667V53.6667C10.667 54.5508 11.0182 55.3986 11.6433 56.0237C12.2684 56.6489 13.1163 57 14.0003 57H20.667C21.551 57 22.3989 56.6489 23.024 56.0237C23.6491 55.3986 24.0003 54.5508 24.0003 53.6667V40.3334H34.0003L50.667 53.6667V0.333374L34.0003 13.6667ZM65.667 27C65.667 32.7 62.467 37.8667 57.3337 40.3334V13.6667C62.4337 16.1667 65.667 21.3334 65.667 27Z" fill="#FF8A00" />
            </svg>
            <v-flex pa-1 pl-4>
              <h4>Смс информирование</h4>
              <p>Введите действующий адрес электронной почты для отправки билета, а так же номер мобильного телефона для связи в случае изменений.</p>
            </v-flex>
          </v-layout>
          <v-list card>
            <v-list-tile>
              <v-list-tile-content>
                <v-radio label="Включить услугу" style="margin-left:15px;" />
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>500 UZS</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-radio label="Нет, спасибо" style="margin-left:15px;" />
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-additional-services-card'
}
</script>
