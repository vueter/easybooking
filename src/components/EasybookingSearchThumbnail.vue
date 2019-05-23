<template>
  <v-content class="basic-searching">
    <!--<v-container>
      <h1>Билеты на самолет. Экономьте на полете!</h1>
    </v-container>-->
    <v-container>
      <v-layout row>
        <v-flex md10 offset-md1>
          <EasybookingSearchboard />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import EasybookingSearchboard from '@/components/EasybookingSearchboard'

export default {
  name: 'EasybookingSearchThumbnail',
  components: {
    EasybookingSearchboard
  }
}
</script>
<style>
  .locatable {
    padding-right: 10px;
  }

  .basic-searching {
    margin-top: 150px;
    margin-bottom: 100px;
    max-width: 100%;
  }

  .basic-searching h1 {
    margin-bottom: 100px;
  }

  .search-tools-text {
    margin-left: 5px;
    font-size: 12px;
  }

  .search-tools-icon {
    float: left;
    margin-top: 3px;
  }

  .search-tools-multi-routes {
    float: left;
    text-align: left;
    margin-top: 10px;
    cursor: pointer;
    padding-top: 13px;
  }

  .theme--light.v-label {
    color: #2c3e50;
    ;
    font-size: 12px;
  }

  .theme--light.v-icon {
    color: #0FB8D3;
  }

  .search-btn {
    height: 40px;
    background-color: #0FB8D3 !important;
    border: none;
    color: white;
    border-radius: 5px;
  }

  .search-btn .v-btn__content {
    color: white;
    font-weight: bold;
  }

  @media only screen and (max-width: 959px) {
    .locatable-on-sm {
      padding-right: 10px;
    }

    .basic-searching {
      margin-top: 50px;
      margin-bottom: 10px;
    }

    .basic-searching h1 {
      margin-bottom: 10px;
    }

    .hide-on-sm {
      display: none;
    }
  }
</style>
