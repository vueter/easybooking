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
    <v-card-text>
      <v-divider></v-divider>
      <font class="eb-divider-txt">№ 1 Взрослый</font>
    </v-card-text>
    <v-card-text>
      <v-layout row wrap>
        <v-flex md4 pa-1>
          <v-text-field box label="Фамилия" />
        </v-flex>
        <v-flex md4 pa-1>
          <v-text-field box label="Имя" />
        </v-flex>
        <v-flex md4 pa-1>
          <v-menu ref="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field label="Дата рождения" append-icon="event" readonly box v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary">OK</v-btn>
            </v-date-picker>
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
          <v-combobox box label="Тип документа" />
        </v-flex>
        <v-flex md4 pa-1>
          <v-text-field box label="Страна выдачи" />
        </v-flex>
        <v-flex md4 pa-1>
          <v-text-field box label="Номер документа" />
        </v-flex>
        <v-flex md4 pa-1>
          <v-menu ref="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field label="Дата выдачи документа" append-icon="event" readonly box v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex md4 pa-1>
          <v-menu ref="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field label="Срок действия документа" append-icon="event" readonly box v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
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
  data: () => ({
    toggle_exclusive: 2
  })
}
</script>
