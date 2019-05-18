<template>
  <v-content>
      <h1>Билеты на самолет. Экономьте на полете!</h1>
      <v-container>
        <v-form>
          <v-layout>
            <v-flex md5 class="locatable"><EasybookingCombobox target="location"/></v-flex>
            <v-flex md3 class="locatable"><EasybookingCombobox target="date"/></v-flex>
            <v-flex class="locatable"><EasybookingPassangerBox/></v-flex>
            <v-flex><EasybookingPassangerBox/></v-flex>
          </v-layout>
        </v-form>
      </v-container>
  </v-content>
</template>

<script>
import EasybookingCombobox from '@/components/core/EasybookingCombobox'
import EasybookingPassangerBox from '@/components/core/EasybookingPassangerBox'
export default {
  name: 'EasybookingSearchThumbnail',
  components: { EasybookingCombobox, EasybookingPassangerBox },
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
</style>
