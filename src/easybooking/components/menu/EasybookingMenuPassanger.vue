<template>
  <v-menu v-bind:close-on-content-click="false" offset-y class="easybooking--passanger">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" block depressed class="easybooking--passanger-btn" v-bind:ripple="false">
        {{all}} человек{{ all > 1 ? 'а' : ''  }}, {{flights.class === 'E' ? 'Эконом' : 'Бизнес'}}
      </v-btn>
    </template>
    <v-card>
      <div class="passengers">
        <div class="passengers-item">
          <div class="passengers-text">
            <div class="passengers-title">Взрослые</div>
            <div class="passengers-description">Старше 12</div>
          </div>
          <el-input-number
            v-on:change="changePass"
            v-model="flights.adt"
            v-bind:min="1"
            v-bind:max="all > 8 ? flights.adt : 9"
          ></el-input-number>
        </div>

        <div class="passengers-item">
          <div class="passengers-text">
            <div class="passengers-title">Дети</div>
            <div class="passengers-description">2-12</div>
          </div>
          <el-input-number
            v-on:change="changePass"
            v-model="flights.chld"
            v-bind:min="0"
            v-bind:max="all > 8 ? flights.chld : 9"
          ></el-input-number>
        </div>

        <div class="passengers-item">
          <div class="passengers-text">
            <div class="passengers-title">Младенцы</div>
            <div class="passengers-description">0-2</div>
          </div>
          <el-input-number
            v-model="flights.inf"
            v-on:change="changePass"
            v-bind:min="0"
            v-bind:max="all < 9 ? (flights.inf < flights.adt ? flights.adt : flights.inf) : flights.inf"
          ></el-input-number>
        </div>

        <el-select v-model="flights.class" placeholder="Выбрать">
          <el-option label="Эконом" value="E"></el-option>
          <el-option label="Бизнес" value="B"></el-option>
        </el-select>
      </div>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  name: 'easybooking-menu-passanger',
  data: () => ({
    all: 1,
    max: 9,
    min: 1,
    flights: {
      adt: 1,
      chld: 0,
      inf: 0,
      class: 'E'
    }
  }),
  methods: {
    changePass () {
      this.all = this.flights.adt + this.flights.inf + this.flights.chld
    },
    getPassengers() {
      return {
        adult_qnt: this.flights.adt,
        child_qnt: this.flights.chld,
        infant_qnt: this.flights.inf,
        class: this.flights.class
      }
    }
  }
}
</script>
<style lang="scss">
.easybooking--passanger-btn{
  &:hover{
    background-color: white !important;
  }
  &.v-btn--active:before, &.v-btn:hover:before, &.v-btn:focus:before{
    background-color: white !important;
  }
}
.passengers {
  padding: 20px;
  &-title {
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #4a4a4a;
  }
  &-description {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #777777;
    float: left;
  }
  &-text {
    margin-right: 30px;
  }
  &-item {
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;

  }
  &-width{
    min-width: 200px;
  }
  .el-select {
        width: 100%;
  }
  .el-input-number {
    width: 90px;
    .el-input-number__increase,
    .el-input-number__decrease {
      background: #0fb8d3;
      width: 25px;
      height: 25px;
      border: 0;
      border-radius: 25px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 7.5px;
      i {
        color: white;
      }
    }

    .el-input-number__decrease.is-disabled {
      background: #87dce9;
    }
  }
  .el-input-number .el-input__inner {
    padding-left: 0;
    padding-right: 0;
    height: auto;
    border: 0;
  }
}
</style>
