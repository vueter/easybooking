<template>
  <div class="support-block">
    <v-container>
      <v-layout row>
        <v-flex md6>
        </v-flex>
        <v-flex md6>
          <h3 class="support-title">Подписка на рассылку</h3>
          <p class="support">Подпишитесь, чтобы быть в курсе всех важных новостей,
            полезных статей из нашего блога и выгодных предложений!</p>
          <div>
            <v-layout row wrap>
              <v-flex md7 xs12 class="support-tools">
                <EasybookingInput placeholder="E-Mail"/>
              </v-flex>
              <v-spacer/>
              <v-flex md5 xs12 class="support-tools">
                <EasybookingSupportBtn />
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EasybookingInput from '@/components/core/EasybookingInput'
import EasybookingSupportBtn from '@/components/core/EasybookingSupportBtn'
export default {
  name: 'EasybookingSupportBlock',
  components: { EasybookingInput, EasybookingSupportBtn }
}
</script>
<style>
.subscripb-btn.v-btn:not(.v-btn--depressed):not(.v-btn--flat){
  -webkit-box-shadow: none;
  box-shadow: none;
}
.subscripb-btn.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: #fff;
}
.subscripb-btn.v-btn .v-btn__content{
  color: #0FB8D3;
}
.support-title{
  font-weight: bold;
}
.support-tools{
  margin-top: 10px;
}
.support-block{
  margin-top: 70px;
}
</style>
