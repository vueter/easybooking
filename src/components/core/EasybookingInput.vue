<template>
  <div class="easybooking-input">
    <input type="text" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  name: 'EasybookingInput',
  props: {
    placeholder: {
      type: String,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style>
  .easybooking-input input {
    border-radius: 4px;
    outline: none;
    height: 40px;
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
    padding: 0 12px;
    box-shadow: none;
    transition: box-shadow .3s, border .3s;
    font-family: "Roboto";
    padding-right: 36px;
    border: 1px solid white !important;
    background-color: transparent !important;
    color: white !important;
    flex: 2;
    color: white;
  }

  .easybooking-input input::placeholder {
    color: white;
  }
</style>
