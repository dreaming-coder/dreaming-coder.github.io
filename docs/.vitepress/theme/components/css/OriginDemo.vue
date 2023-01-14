<template>
  <div class="demo">
    <div class="origin-demo"></div>
  </div>
</template>

<script>
export default {
  name: "OriginDemo"
}
</script>

<style scoped>
.origin-demo {
  margin-left:120px;
  margin-bottom: 70px;
  width: 200px;
  height: 200px;
  background-color: lime;
  transform: rotate(30deg);
  transform-origin: left top;
}
</style>