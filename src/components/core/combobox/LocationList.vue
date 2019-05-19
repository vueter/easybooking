<template>
    <div class="locations-list">
        <LocationItem :city="item.city" :country="item.country" :code="item.code" v-for="(item, index) in items" v-bind:key="index"/>
    </div>
</template>
<script>
import LocationItem from '@/components/core/combobox/LocationItem'
export default {
  name: 'LocationList',
  components: { LocationItem },
  data: () => {
    return {
      items: []
    }
  },
  methods: {
    update (items) {
      this.items = items
    }
  }
}
</script>
<style>
.locations-list{
    position: absolute;
    margin-top: 50px;
    border-radius: 4px;
    box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
    z-index: 9;
    background-color: white;
    max-width: 370px;
    width: 100%;
}
.locations-list .location-item:first-child{
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.locations-list .location-item:last-child{
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
</style>
