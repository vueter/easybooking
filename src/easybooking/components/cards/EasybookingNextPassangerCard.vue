<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Данные пассажиров
    </v-card-title>
    <v-card-text>
      Данные заполняются латинскими буквами, как в документе, по которому будет осуществляться перелет.
    </v-card-text>
    <v-card-text>
      <p class="icon-text seconday-color">
        <v-icon color="#c2c2c2">account_box</v-icon> Добавить пассажира из записной книжки
      </p>
    </v-card-text>
    <v-card-text>
      <v-divider></v-divider>
      <font class="eb-divider-txt">Записная книжка</font>
    </v-card-text>
    <v-card-text>
      <v-layout row wrap>
        <v-flex md8>
          <v-checkbox hide-details color="primary">
            <template v-slot:append>
              <v-card flat>
                <p>Джон Сноу Винтерфел</p>
                <p>Великобритания</p>
                <p>10.01.1999</p>
              </v-card>
            </template>
          </v-checkbox>
          <v-checkbox hide-details color="primary">
            <template v-slot:append>
              <v-card flat>
                <p>Тирион Ланистер</p>
                <p>Шотландия</p>
                <p>20.02.1998</p>
              </v-card>
            </template>
          </v-checkbox>
          <v-layout row>
            <v-flex md6>
              <v-btn color="primary" block large>Добавить</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md4>
          <v-combobox box label="Документ"></v-combobox>
          <v-combobox box label="Документ: ABS123"></v-combobox>
        </v-flex>
      </v-layout>
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
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-next-passanger-card'
}
</script>
