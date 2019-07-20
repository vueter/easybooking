<template>
  <v-card class="e-ticket">
    <div @click="ticketToggle" class="e-ticket-caret" v-bind:class="is_open ? 'open' : ''">
      <v-icon v-bind:color="is_open ? '#A2A2A2' : 'white'">{{ is_open ? 'arrow_drop_up' : 'arrow_drop_down' }}</v-icon>
    </div>
    <div class="e-ticket-content">
      <div v-on:click="ticketToggle" class="e-ticket-info" v-for="(segment, index) in ticket" v-bind:key="'segment_' + index">
        <div class="e-ticket-logo">
          <img v-bind:src="segment.flights_info[0].marketing_airline_logo" v-bind:alt="segment.flights_info[0].marketing_airline_name"/>
        </div>
        <div class="e-ticket-from">
          <div class="e-ticket-from-time">{{ segment.flights_info[0].departure_local_time }}</div>
          <div class="e-ticket-from-city">{{ subStr(segment.flights_info[0].departure_city) }}</div>
          <div
            class="e-ticket-from-date"
          >{{ formatDate(segment.flights_info[0].departure_local_timestamp, 1) }}</div>
        </div>

        <div class="e-ticket-timeline">
          <div class="e-ticket-duration">{{ formatTime(segment.duration_minutes) }}</div>
          <div class="e-ticket-circle">
            <span v-for="info in segment.flights_info" v-bind:key="info.flight_number" v-bind:title="info.departure_city">{{ info.departure_airport }}</span>
            <span v-bind:title="segment.flights_info[segment.stops].arrival_city">{{ segment.flights_info[segment.stops].arrival_airport }}</span>
          </div>
        </div>

        <div class="e-ticket-to">
          <div class="e-ticket-to-time">{{ segment.flights_info[segment.flights_info.length - 1].arrival_local_time }}</div>
          <div class="e-ticket-to-city">{{ subStr(segment.flights_info[segment.flights_info.length - 1].arrival_city) }}</div>
          <div class="e-ticket-to-date">{{ formatDate(segment.flights_info[segment.flights_info.length - 1].arrival_local_timestamp, 1) }}</div>
        </div>
      </div>
      <template v-for="segment in ticket">
        <easybooking-ticket-detail v-bind:taggle="ticketToggle" v-for="detail in segment.flights_info" :is_open="is_open" :formatDate="formatDate" :formatTime="formatTime" :key="detail.flight_number" :detail="detail" :baggage="ticket.baggage" :clas="ticket.class" :seats="ticket.seats"/>
      </template>
      <div v-if="is_open" class="e-ticket-rules">
        <v-btn class="e-ticket-rules-btn" flat color="primary" v-on:click="showRules">Правила тарифа</v-btn>
      </div>
    </div>
    <div class="e-ticket-buy">
      <div>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <img v-on="on" src="../../../assets/image/gift.png" />
          </template>
          <span>1 бонусный балл</span>
        </v-tooltip>
      </div>
      <div class="e-ticket-price">
        <span>{{ ticket[ticket.length - 1].fare_family ? 'от' : '' }}</span>
        {{ formatPrice(ticket[ticket.length - 1].price) }} {{$etm.currency}}
      </div>

      <v-btn class="e-ticket-buy-btn" @click="booking" color="primary" v-bind:loading="isLoading" v-bind:disabled="!isPossible">{{ isPossible ? 'Купить': 'Нет мест'}}</v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "easybooking-ticket-card",
  props: {
    ticket: {
      type: Array,
      default: []
    },
    ff: undefined,
    rules: undefined
  },
  data() {
    return {
      is_open: false,
      isLoading: false,
      isPossible: true
    };
  },
  methods: {
    ticketToggle() {
      this.is_open = !this.is_open;
    },
    showRules(){
      this.$etm.offersRules(this.ticket[this.ticket.length - 1].buy_id, (error, rules) => {
        if(error){
          this.$etm.alert('rules could not load')
        }
        else{
          this.rules.open(rules.routes)
        }
      })
    },
    booking() {
      this.isLoading = true
      if(this.ticket[this.ticket.length - 1].fare_family){
        this.$etm.offersFireFamily(this.ticket[this.ticket.length - 1].buy_id, (_, fareFamily) => {
          this.isLoading = false
          this.ff.open(fareFamily.fare_family, this.ticket)
        })
      }
      else{
        this.isLoading = true
        this.$etm.offersAvailability(this.ticket[this.ticket.length - 1].buy_id, (error, result) => {
          this.isLoading = false
          if(result.status != 'error'){
            if(result.availability){
              this.$store.commit('setTicket', this.ticket)
              this.$router.push({
                path: '/booking/' + this.$route.params.id + '/' + this.ticket[this.ticket.length - 1].buy_id
              })
            }
          }
          else{
            this.isPossible = false
            this.$etm.alert(result.message)
          }
        })
      }
    },

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

    formatDate(timestamp, format = 2) {
      var a = new Date(timestamp * 1000);
      var months_arr = [
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек"
      ];
      var week_arr = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
      var year = a.getFullYear();
      var month = months_arr[a.getMonth()];
      var month2 = a.getMonth();
      var week = week_arr[a.getDay()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      if (format === 1) {
        var time = date + " " + month + " " + year + ", " + week;
      } else {
        var time = date + "/" + month2 + "/" + year;
      }
      return time;
    },

    formatTime(time) {
      time = parseInt(time);
      const minute = time % 60;
      const hour = (time - minute) / 60;
      if (hour) {
        return hour + " ч  " + minute + " мин";
      } else {
        return minute + " мин";
      }
    },

    subStr(str) {
      var dot = "";
      if (str.length > 12) {
        dot = "...";
      }
      str = str.substr(0, 12) + dot;
      return str;
    }
  }
};
</script>
<style lang="scss">
.e-ticket {
  margin-bottom: 20px;
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
    span {
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      color: #777777;
    }
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
  &-from,
  &-to {
    &-date {
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #777777;
    }
    &-time {
      font-size: 20px;
      line-height: 23px;
      color: #4a4a4a;
    }
    &-city {
      font-size: 13px;
      line-height: 15px;
      color: #4a4a4a;
      margin: 3px 0px;
    }
  }
  &-from {
    text-align: left;
  }
  &-to {
    text-align: right;
  }
  &-detail {
    margin: 0px 20px;
    padding: 20px 0px;
    text-align: left;
    padding-bottom: 0;
    &:first-child{
      border-top: 1px solid #DBDBDB;
    }

  }
  &-duration {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #4a4a4a;
  }
  &-circle {
    border-top: 1px solid #0fb8d3;
    margin: 10px 15px;
    min-width: 130px;
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #4a4a4a;
      margin-top: 10px;
      position: relative;
      cursor: pointer;
      &:hover {
        color: #0bd5f5;
      }
      &::after {
        content: "";
        display: block;
        width: 9px;
        height: 9px;
        background: #0fb8d3;
        border: 1px solid #0fb8d3;
        box-sizing: border-box;
        border-radius: 9px;
        position: absolute;
        top: -15px;
        left: 50%;
        margin-left: -5.5px;
      }
      &:first-child {
        left: -17px;
        &::after {
          content: "";
          display: block;
          width: 11px;
          height: 11px;
          background: #ffffff;
          border: 1px solid #0fb8d3;
          top: -16px;
        }
      }
      &:last-child {
        right: -17px;
        &::after {
          content: "";
          display: block;
          width: 11px;
          height: 11px;
          background: #ffffff;
          border: 1px solid #0fb8d3;
          top: -16px;
        }
      }
    }
  }

  &-data{
      font-size: 14px;
      line-height: 2;
      padding: 20px 0px;
    &-left{
      text-align: left !important;
    }
    &-right{
      text-align: right !important;
    }
    span{
      color: #777777;
    }
  }
  &-stoptime{
    border: 1px solid #0FB8D3;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 14px;
    line-height: 16px;
    color: #777777;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-bottom: 20px;
    i{
      color: #0FB8D3 !important;
      margin-right: 10px;
      font-size: 20px;
    }
  }
  &-rules{
    padding-bottom: 20px;
    text-align: left;
    padding-left: 20px;
    &-btn{
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-transform:inherit;
      padding: 0;
      margin: 0;
      &:hover{
        background-color: white !important;
      }
    }
  }
}

.reys {
  display: flex;
  height: 50px;
  align-items: center;
  &-icon {
    i {
      font-size: 20px;
      color: #0fb8d3 !important;
    }
  }
  &-hour,
  &-city,
  &-date,
  &-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-size: 14px;
    line-height: 16px;
    align-items: flex-start;
    margin-right: 10px;
  }
  &-hour {
    color: #4a4a4a;
    width: 50px;
  }
  &-city,
  &-date {
    color: #777777;
    min-width: 80px;
  }
  &-duration {
    font-size: 13px;
    line-height: 15px;
    color: #4a4a4a;
    margin-right: 20px;
  }
}
</style>
