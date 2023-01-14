<template>
  <div class="demo">
    <div class="rotate-3d-demo"></div>
  </div>
</template>

<script>
export default {
  name: "RotateDemoTwo"
}
</script>

<style scoped>
.rotate-3d-demo {
  margin: 25px;
  width: 200px;
  height: 200px;
  text-align: center;
  vertical-align: center;
  background-color: #9145f8;
  transform: rotateZ(45deg);
}
</style>