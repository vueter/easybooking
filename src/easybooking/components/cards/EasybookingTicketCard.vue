<template>
  <v-card class="e-ticket">
    <div @click="ticketToggle" class="e-ticket-caret" v-bind:class="is_open ? 'open' : ''">
      <v-icon
        :color="is_open ? '#A2A2A2' : 'white'"
      >{{ is_open ? 'arrow_drop_up' : 'arrow_drop_down' }}</v-icon>
    </div>
    <div @click="ticketToggle" class="e-ticket-content">
      <div class="e-ticket-info">
        <div class="e-ticket-logo">
          <img
            :src="ticket.flights_info[0].marketing_airline_logo"
            :alt="ticket.flights_info[0].marketing_airline_name"
          />
        </div>
        <div class="e-ticket-from">
          <div class="e-ticket-from-date">{{ formatDate(ticket.flights_info[0].departure_local_timestamp) }}</div>
          <div class="e-ticket-from-time">{{ ticket.flights_info[0].departure_local_time }}</div>
          <div class="e-ticket-from-city">{{ subStr(ticket.flights_info[0].departure_city) }}</div>
        </div>
        <div class="e-ticket-timeline"></div>
        <div class="e-ticket-to">
          <div class="e-ticket-to-date">{{ formatDate(ticket.flights_info[0].arrival_local_timestamp) }}</div>
          <div class="e-ticket-to-time">{{ ticket.flights_info[0].arrival_local_time }}</div>
          <div class="e-ticket-to-city">{{ subStr(ticket.flights_info[0].arrival_city) }}</div>
        </div>
      </div>
      <div class="e-ticket-detail" v-if="is_open">{{ ticket }}</div>
    </div>
    <div class="e-ticket-buy">
      <div>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <img v-on="on" src="../../../assets/image/gift.png" />
          </template>
          <span>Cashback</span>
        </v-tooltip>
      </div>
      <div class="e-ticket-price">{{ ticket.fare_family ? 'от' : '' }} {{ formatPrice(ticket.price) }} {{$etm.currency}}</div>

      <v-btn class="e-ticket-buy-btn" @click.capture="ticketBuy" color="primary">Купить</v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "easybooking-ticket-card",
  props: {
    ticket: Object
  },
  data() {
    return {
      is_open: false
    };
  },
  methods: {
    ticketToggle() {
      this.is_open = !this.is_open;
    },
    ticketBuy(e) {},

    formatPrice(price) {
      price = Math.ceil(price);
      if (price === null) {
        return "Билетов нет";
      } else {
        price = Math.ceil(price);
        price = new Intl.NumberFormat("ru-RU").format(price);
        return price;
      }
    },

    formatDate(timestamp) {
      var a = new Date(timestamp * 1000);

      var year = a.getFullYear();
      var month = a.getMonth();
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + "/" + month + "/" + year;
      return time;
    },

    subStr(str){
      var dot = ''
      if(str.length > 12){
        dot = '...'
      }
      str = str.substr(0, 12) + dot;
      return str
    }
  }
};
</script>
<style lang="scss">
.e-ticket {
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: none;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
  &-caret {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0fb8d3;
    border-radius: 4px 0px 0px 4px !important;
    transition: 0.3s;
    i {
      font-size: 17px;
    }
    &.open {
      background: #f5f5f5;
    }
  }
  &-buy {
    min-width: 160px;
    border-left: 1px dashed #dbdbdb;
    padding: 17px 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background: #f4f4f4;
      border-radius: 10px;
      position: absolute;
      top: -5px;
      left: -5.5px;
      box-shadow: inset 1px 0px 15px -8px rgba(0, 8, 19, 0.15);
    }
    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background: #f4f4f4;
      border-radius: 10px;
      position: absolute;
      bottom: -5px;
      left: -5.5px;
      box-shadow: inset 0px 5px 10px rgba(0, 8, 19, 0.15);
    }
    &-btn {
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      text-transform: capitalize;
      height: 40px;
      box-shadow: none !important;
      margin: 5px 20px 0;
    }
  }
  &-price {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #4a4a4a;
  }
  &-content {
    width: 100%;
  }
  &-info {
    width: 100%;
    min-height: 122px;
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-logo {
    display: flex;
    align-items: center;
    img {
      width: 93px;
    }
  }
  &-from, &-to {
    &-date {
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #777777;
    }
    &-time{
      font-size: 20px;
      line-height: 23px;
      color: #4A4A4A;
      margin: 3px 0px;
    }
    &-city{
      font-size: 13px;
      line-height: 15px;
      color: #4A4A4A;
    }
  }
  &-from{
    text-align: left;
  }
  &-to{
    text-align: right;
  }
  &-transition{
  }
}
</style>
