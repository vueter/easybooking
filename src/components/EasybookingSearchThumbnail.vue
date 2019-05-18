<template>
  <v-content class="basic-searching">
      <v-container>
        <h1>Билеты на самолет. Экономьте на полете!</h1>
      </v-container>
      <v-container>
        <v-form>
          <v-layout wrap>
            <v-flex md5  class="locatable"><EasybookingCombobox target="location"/></v-flex>
            <v-flex md3  class="locatable"><EasybookingCombobox target="date"/></v-flex>
            <v-flex class="locatable"><EasybookingPassangerBox/></v-flex>
            <v-flex class="locatable-on-sm"><EasybookingSearchButton/></v-flex>
          </v-layout>
        </v-form>
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
}
</style>
