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
          <v-form>
            <v-layout row>
              <v-flex md6>
                <v-text-field outline color="white" class="support-input"/>
              </v-flex>
              <v-spacer/>
              <v-flex md5>
                <v-btn class="subscripb-btn" block>Subscrib</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'EasybookingSupportBlock'
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
</style>
