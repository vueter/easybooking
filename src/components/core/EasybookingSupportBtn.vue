<template>
    <div class="easybooking-support-btn-group" :class="'btn-color-' + color">
        <button class="easybooking-support-btn">{{text}}</button>
    </div>
</template>
<script>
export default {
  name: 'EasybookingSupportBtn',
  props: {
    text: {
      type: String,
      default: () => { return 'Подписаться' }
    },
    color: {
      type: String,
      default: () => {
        return 'white'
      }
    }
  }
}
</script>

<style>
.easybooking-support-btn-group{
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
}
.easybooking-support-btn{
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 5px;
    color: #0FB8D3;
    font-weight: bold;
    outline: none;
}
.btn-color-blue{
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 10px;
}
.btn-color-blue .easybooking-support-btn{
    background-color: #0FB8D3;
    color: white;
}
</style>
