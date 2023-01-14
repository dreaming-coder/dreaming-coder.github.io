<template>
  <div class="demo">
    <div class="rotate-demo"></div>
  </div>
</template>

<script>
export default {
  name: "RotateDemo"
}
</script>

<style scoped>
.rotate-demo {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 150px;
  height: 150px;
  background-color: lime;
  transform: rotate(45deg);
}
</style>