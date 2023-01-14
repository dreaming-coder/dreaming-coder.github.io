<template>
  <div class="demo ice-container">
    <div>
      <div class="div1"></div>
      <div class="div2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundImage"
}
</script>

<style scoped>
.ice-container {
  clear: both;
}
.div1, .div2 {
  float: left;
  margin-left: 20px;
  width: 100px;
  height: 100px;
  border-width: 2px;
  border-style: solid;
}

.div1 {
  background-color: cyan;
}

.div2 {
  background-image: url("../../../../public/imgs/web/css/box/css-box-6.webp");
}
</style>