<template>
  <v-menu offset-y ref="location-combobox">
    <template v-slot:activator="{ on }">
      <v-layout row class="easybooking--double-combobox">
        <v-flex class="easybooking--double-combobox-field">
          <input
            type="text"
            class="main-field first"
            ref="departure"
            v-bind:placeholder="placeholder['departure'] ? placeholder['departure'] : 'Откуда'"
            v-on:input="typing('departure')"
            v-on:keyup.down="key('down', $event)"
            v-on:keyup.up="key('up', $event)"
            v-on:keyup.tab="submitKey"
            v-on:keyup.enter="submitKey"
          />
        </v-flex>
        <v-btn
          icon
          class="easybooking--double-combobox-icon-btn"
          v-on:click="swap"
          v-bind:ripple="false"
        >
          <v-icon color="primary">swap_horiz</v-icon>
        </v-btn>
        <v-flex class="easybooking--double-combobox-field">
          <input
            type="text"
            class="main-field last"
            ref="arrival"
            v-bind:placeholder="placeholder['arrival'] ? placeholder['arrival'] : 'Куда'"
            v-on:input="typing('arrival')"
            v-on:keyup.down="key('down', $event)"
            v-on:keyup.up="key('up', $event)"
            v-on:keyup.tab="submitKey"
            v-on:keyup.enter="submitKey"
          />
        </v-flex>
      </v-layout>
    </template>
    <v-list class="double-combobox-list">
      <template v-for="item in items">
        <v-list-tile v-bind:class="{active: item.id == activePosition}" v-if="item.items === null" v-bind:key="item.code" v-on:click="select(item)">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.city }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.code }}</v-list-tile-action-text>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-group
          class="double-combobox-groups"
          v-if="item.items !== null"
          v-bind:key="item.code"
          v-bind:no-action="true"
          v-bind:value="true"
          append-icon
        >
          <template v-slot:activator>
            <v-list-tile v-bind:class="{active: item.id == activePosition}" v-on:click="select(item)">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.city }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.code }}</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="subItem in item.items"
            v-bind:key="subItem.title"
            v-on:click="select(subItem)"
            v-bind:class="{active: subItem.id == activePosition}"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.city }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ subItem.name }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ subItem.code }}</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </template>
    </v-list>
  </v-menu>
</template>
<script>
import Easybooking from "../../mixins/easybooking";
export default {
  name: "easybooking-double-combobox",
  mixins: [Easybooking],
  data: () => ({
    items: [],
    activeTarget: null,
    result: {
      departure: null,
      arrival: null
    },
    placeholder: {
      departure: "",
      arrival: ""
    },
    activePosition: 0,
    counts: 0
  }),
  methods: {
    key(target, e){
      e.preventDefault()
      if(target == 'down'){
        if(this.activePosition + 1 < this.counts)
        {
          this.activePosition += 1
        }
      }
      else{
        if(this.activePosition > 0){
          this.activePosition -= 1
        }
      }
    },
    submitKey(){
      for(const item of this.items){
        if(item.id == this.activePosition){
          this.select(item)
        }
        if(item.items){
          for(const _item of item.items){
            if(_item.id == this.activePosition){
              this.select(_item)
            }
          }
        }
      }
    },
    select(item) {
      this.result[this.activeTarget] = item.code;
      this.$refs[this.activeTarget].value = "";
      this.placeholder[this.activeTarget] = item.city;
      const menu = this.$refs["location-combobox"];
      menu.runDelay("close", () => {
        menu.isActive = false;
      });
    },
    swap() {
      var arr_code = this.result["arrival"];
      var dep_code = this.result["departure"];
      var arr_text = this.placeholder["arrival"];
      var dep_text = this.placeholder["departure"];
      this.result = {
        arrival: dep_code,
        departure: arr_code
      };
      this.placeholder = {
        arrival: dep_text,
        departure: arr_text
      };
    },
    typing(target) {
      this.activePosition = 0
      const input = this.$refs[target];
      const menu = this.$refs["location-combobox"];
      this.activeTarget = target;
      if (input.value.length > 2) {
        if (this.searchLocation !== undefined && this.searchLocation !== null) {
          this.searchLocation(input.value, items => {
            this.items = items;
            var counts = 0;
            for(const item of items){
              if(item.items){
                counts += item.items.length
              }
            }
            counts += items.length
            this.counts = counts
            if (menu.isActive === false) {
              menu.runDelay("open", () => {
                menu.isActive = true;
              });
            }
          });
        }
      } else {
        menu.runDelay("close", () => {
          menu.isActive = false;
        });
      }
    },
    getDirection() {
      return {
        departure_code: this.result.departure,
        arrival_code: this.result.arrival
      };
    }
  }
};
</script>
<style lang="scss">
.theme--light.v-list .v-list__group--active:before,
.theme--light.v-list .double-combobox-groups:after {
  background: transparent;
}
.double-combobox-groups .v-list__group__items--no-action .v-list__tile {
  padding-left: 30px !important;
}
.double-combobox-groups .v-list__group__items {
  background: #f5f5f5;
}
.theme--light.v-list .v-list__tile--link:hover,
.theme--light.v-list .v-list__tile--highlighted,
.theme--light.v-list .v-list__group__header:hover {
  background: #edfdff;
  border-left: 2px solid #0bd5f5;
}
.v-list__tile {
  height: 59px;
  border-left: 2px solid transparent;
}
.double-combobox-groups .v-list__group__header {
  border-left: 0px !important;
}
.double-combobox-list {
  padding: 0px;
  overflow-x: auto;
  max-height: 305px;
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  &::-webkit-scrollbar-button {
    background-color: white;
    height: 0;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #0fb8d3;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-corner {
    background-color: #0fb8d3;
  }

  .v-list__tile__title {
    font-size: 14px;
    line-height: 16px;
    color: #4a4a4a;
    line-height: normal;
    height: auto;
    margin-bottom: 5px;
  }
  .v-list__tile__sub-title {
    font-size: 12px;
    line-height: 14px;
    color: #777777;
  }
}
.active .v-list__tile{
  background: #edfdff;
    border-left: 2px solid #0bd5f5;
}
</style>
