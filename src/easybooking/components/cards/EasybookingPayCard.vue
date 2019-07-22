<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Оплата
    </v-card-title>
    <v-card-text>
      <center>
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9997 0.333336C30.5016 0.333336 33.9692 1.02309 37.2046 2.36322C40.4399 3.70334 43.3796 5.66759 45.8559 8.14382C48.3321 10.6201 50.2963 13.5598 51.6365 16.7951C52.9766 20.0305 53.6663 23.4981 53.6663 27C53.6663 34.0724 50.8568 40.8552 45.8559 45.8562C40.8549 50.8572 34.0721 53.6667 26.9997 53.6667C23.4978 53.6667 20.0301 52.9769 16.7948 51.6368C13.5594 50.2967 10.6197 48.3324 8.14349 45.8562C3.14252 40.8552 0.333008 34.0724 0.333008 27C0.333008 19.9276 3.14252 13.1448 8.14349 8.14382C13.1445 3.14285 19.9272 0.333336 26.9997 0.333336V0.333336ZM24.333 39L42.9997 20.3333L39.2397 16.5733L24.333 31.4533L16.093 23.24L12.333 27L24.333 39Z" fill="#0FB8D3" />
        </svg>
      </center>
      <center>
        <h4>Ваш билет успешно забронирован!</h4>
      </center>
      <center>
        <h4>Пожалуйста выберите способ оплаты.</h4>
      </center>
      <center>
        <p style="margin-top: 40px;">PNR номер: {{booked.pnr_number}}</p>
      </center>
    </v-card-text>
    <v-card-text>
      <v-card flat style="border: 1px solid #DBDBDB">
        <v-radio-group style="margin:0;padding:0;display:block" color="primary">
          <v-layout row style="width: 100%;margin:0;padding:0;display:block">
            <v-flex md6>
              <v-card flat>
                <v-card-text>
                  <v-radio label="Онлайн оплата" value="online"></v-radio>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md6>
              <v-card flat>
                <v-card-text>
                  <v-radio label="Наличный расчет в офисе" value="office"></v-radio>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-radio-group>
        <v-card-text>
          Выберите платежную систему
          <v-layout row>
            <v-flex md12 pa-1>
              <v-btn block color="primary" large>
                <svg width="86" height="15" viewBox="0 0 86 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="86" height="15">
                      <path d="M0 14.5371H85.1713V0.166809H0V14.5371Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.716 0.166809L29.9795 14.5481H23.0994V11.9642H25.5269L21.716 5.33471L17.9053 11.9642H20.4999V14.5481H13.458L21.716 0.166809Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M54.5863 6.50925V14.5481H51.5117V0.166809L58.1674 5.41298V5.44944L64.8334 0.203272V14.5481H61.7588V6.55086L58.1674 9.38039V9.33858L54.5863 6.50925Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M36.697 8.01268L31.0645 2.38016L33.236 0.203278L38.2577 5.22515L43.2744 0.203278L45.4459 2.38016L39.7716 8.0543V14.5481H36.697V8.01268Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.07463 3.27791V5.84096H7.1726C7.52747 5.84096 7.83022 5.71573 8.07551 5.47044C8.32596 5.21981 8.45137 4.91706 8.45137 4.56201C8.45137 4.20715 8.32596 3.9044 8.07551 3.65376C7.83022 3.40313 7.52747 3.27791 7.1726 3.27791H3.07463ZM0 0.203278H7.1726C8.3731 0.203278 9.40141 0.631435 10.247 1.48222C11.098 2.3332 11.526 3.36151 11.526 4.56201C11.526 5.76269 11.098 6.79119 10.247 7.64198C9.40141 8.48761 8.3731 8.91577 7.1726 8.91577H3.07463V14.5481H0V0.203278Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M77.9 11.4317L76.334 14.3603C76.4542 14.3864 76.5741 14.4124 76.6995 14.4385C77.1588 14.5012 77.6078 14.543 78.0462 14.5481C81.9873 14.5168 85.1717 11.3065 85.1717 7.36005C85.1717 6.812 85.1143 6.28477 84.9995 5.77319C85.0724 6.33689 85.0516 6.91642 84.9159 7.49061C84.2581 10.2833 81.1783 11.9746 77.9 11.4317Z" fill="white" />
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M81.7937 11.0037C81.8824 10.6279 81.9294 10.2364 81.9294 9.83436C81.9294 7.47498 80.2797 5.50178 78.0664 5.00585L80.4311 0.594818C82.7124 1.41964 84.456 3.37204 84.9989 5.77322C85.0718 6.33691 85.051 6.91645 84.9153 7.49064C84.5394 9.0983 83.3544 10.3408 81.7937 11.0037Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.8888 9.61517C76.8972 11.4422 76.323 12.5384 75.4825 14.1045C74.9812 13.9218 74.5063 13.6817 74.0678 13.3946C73.5927 13.071 73.1334 12.6795 72.7055 12.2462C72.1572 11.6561 71.7189 10.9985 71.3952 10.252L71.3847 10.2207L71.39 10.2102C71.3796 10.1842 71.3691 10.1529 71.3639 10.1268C71.202 9.51591 71.0245 8.43549 71.1656 7.6055C71.1812 7.53755 71.1969 7.46444 71.2125 7.39133C71.583 5.9507 72.5592 4.79182 73.8695 4.07141C73.8485 4.25925 73.838 4.45243 73.838 4.6456C73.838 7.09908 75.5764 9.1454 77.8888 9.61517Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.6224 0.354636L78.0094 3.30404C74.7989 2.93868 71.9174 4.6561 71.2129 7.39133C70.9779 8.29442 71.218 9.62567 71.3955 10.252C71.0248 9.40119 70.8004 8.43548 70.79 7.44879C70.8108 6.26394 71.0874 5.05792 71.6357 3.97215C73.1756 1.0907 76.459 -0.381242 79.6224 0.354636Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="85.2632" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-text>
          <v-layout row>
            <v-flex md12 pa-1>
              <v-card flat style="border: 1px solid #DBDBDB">
                <v-card-text>
                  <v-card color="primary">
                    <v-card-text>
                      <v-text-field label="Номер карты" solo mask="#### #### #### ####" prefix="8600" />
                      <v-text-field label="Срок действия карты" solo mask="## / ##" />
                    </v-card-text>
                  </v-card>
                </v-card-text>
                <v-list card>
                  <v-list-tile>
                    <v-list-tile-content>Номер инвойса</v-list-tile-content>
                    <v-list-tile-action>111</v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Сумма платежа</v-list-tile-content>
                    <v-list-tile-action>1 200 000 UZS</v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Комиссия с плательщика</v-list-tile-content>
                    <v-list-tile-action>10 %</v-list-tile-action>
                  </v-list-tile>
                  <v-card-text>
                    <v-btn large color="primary" block>
                      Продолжить
                    </v-btn>
                  </v-card-text>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-pay-card',
  props: {
    booked: {
      type: Object,
      default: {}
    }
  }
}
</script>
