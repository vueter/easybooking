<template>
  <v-content class="basic-searching">
      <v-container>
        <h1>Билеты на самолет. Экономьте на полете!</h1>
      </v-container>
      <v-container>
        <v-layout row>
          <v-flex md10 offset-md1>
            <v-form>
              <v-layout wrap v-if="!isMulti">
                <v-flex md5  class="locatable"><EasybookingCombobox target="location"/></v-flex>
                <v-flex md3  class="locatable"><EasybookingCombobox target="date"/></v-flex>
                <v-flex class="locatable"><EasybookingPassangerBox/></v-flex>
                <v-flex class="locatable-on-sm"><EasybookingSearchButton/></v-flex>
              </v-layout>
              <v-layout row>
                <v-flex md2 class="search-tools-multi-routes">
                  <img src="../assets/images/multi-routes.svg" class="search-tools-icon">
                  <font class="search-tools-text clickable">Сложный маршрут</font>
                </v-flex>
                <v-flex md2>
                  <v-checkbox color="#0FB8D3" label="+/- 1 день"></v-checkbox>
                </v-flex>
              </v-layout>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
import EasybookingCombobox from '@/components/core/EasybookingCombobox'
import EasybookingPassangerBox from '@/components/core/EasybookingPassangerBox'
import EasybookingSearchButton from '@/components/core/EasybookingSearchButton'
export default {
  name: 'EasybookingSearchThumbnail',
  components: { EasybookingCombobox, EasybookingPassangerBox, EasybookingSearchButton },
  data: () => {
    return {
      isMulti: false
    }
  }
}
</script>
<style>
.locatable{
  padding-right: 10px;
}
.basic-searching{
  margin-top: 150px;
  margin-bottom: 100px;
  max-width: 100%;
}
.basic-searching h1{
  margin-bottom: 100px;
}
.search-tools-text{
  margin-left: 5px;
  font-size:12px;
}
.search-tools-icon{
  float:left;
  margin-top:3px;
}
.search-tools-multi-routes{
  float: left;
  text-align:left;
  margin-top: 10px;
  cursor:pointer;
  padding-top: 13px;
}
.theme--light.v-label{
  color: #2c3e50;;
  font-size: 12px;
}
.theme--light.v-icon{
  color: #0FB8D3;
}
@media only screen and (max-width: 959px){
  .locatable-on-sm{
    padding-right: 10px;
  }
  .basic-searching{
    margin-top: 50px;
    margin-bottom: 10px;
  }
  .basic-searching h1{
    margin-bottom: 10px;
  }
  .hide-on-sm{
    display: none;
  }
}
</style>
