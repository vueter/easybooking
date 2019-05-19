<template>
    <v-card class="subscribe-card">
        <div class="subscribe-card-header">
            <img src="../../assets/images/subscribe.svg"> <font>Обновление цен</font>
        </div>
        <div class="subscribe-card-body">
            Подпишитесь на обновление цен, чтобы быть в курсе обо всех изменениях.
            <input type="email" placeholder="E-Mail" class="subscribe-email">
            <EasybookingSupportBtn color="blue"/>
        </div>
    </v-card>
</template>
<script>
import EasybookingSupportBtn from '@/components/core/EasybookingSupportBtn'
export default {
  name: 'EasybookingSubscribeCard',
  components: {
    EasybookingSupportBtn
  }
}
</script>

<style>
.subscribe-card{
    padding: 15px;
    background: #FFFFFF;
    box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
    border-radius: 4px;
}
.subscribe-card-header font{
    font-size: 15px;
    line-height: 14px;
    color: #0FB8D3;
    margin-left: 5px;
    position: relative;
    top: -5px;
}
.subscribe-card-body{
    padding-top: 10px;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #777777;
}
.subscribe-email{
    border: 1px solid #0FB8D3;
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
}
.subscribe-email::placeholder{
    color: #0FB8D3;
}
</style>
