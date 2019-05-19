<template>
    <v-card class="filters-card">
        <div class="filters-card-header">
            Сортировка
        </div>
        <div class="filters-card-body">
        </div>
    </v-card>
</template>
<script>

export default {
  name: 'EasybookingFiltersCard'
}
</script>
<style>
.filters-card{
    margin-top: 20px;
    box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
    border-radius: 4px;
    background-color: white !important;
    padding: 15px;
}
.filters-card-header{
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #4A4A4A;
    margin-top: 15px;
    margin-bottom: 15px;
}
.filters-card-header:first-child{
    margin-top: 0px;
}
.filters-card-header:last-child{
    margin-bottom: 0px;
}
.filters-card-body{
    background-color: white !important;
    text-align: left;
}
</style>
