<template>
  <div class="demo">
    <div class="pos"></div>
  </div>
</template>

<script>
export default {
  name: "BackgroundPosition"
}
</script>

<style scoped>
.pos {
  background-image: url("../../../../public/imgs/web/css/box/css-box-6.webp");
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  background-position: right bottom;
  border: 1px solid;
}
</style>