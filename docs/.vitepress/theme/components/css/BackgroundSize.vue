<template>
  <div class="demo">
    <div class="contain-demo"></div>
  </div>
</template>

<script>
export default {
  name: "BackgroundSize"
}
</script>

<style scoped>
.contain-demo {
  background-image: url("../../../../public/imgs/web/css/box/css-box-6.webp");
  background-size: contain;
  width: 300px;
  height: 200px;
}
</style>