<template>
    <div class="easybooking-support-btn-group">
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
</style>
