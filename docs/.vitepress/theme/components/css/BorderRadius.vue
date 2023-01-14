<template>
  <div class="demo">
    <div class="radius-demo"></div>
  </div>
</template>

<script>
export default {
  name: "BorderRadius"
}
</script>

<style scoped>
.radius-demo {
  display: block;
  width: 100px;
  height: 100px;
  border-width: 4px;
  border-style: solid;
  border-left-color: red;
  border-top-color: cyan;
  border-right-color: blue;
  border-bottom-color: orange;

  /* 下面四行可以简写为：border-radius: 15px 30px 45px 60px; */
  border-top-left-radius: 15px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 45px;
  border-bottom-left-radius: 60px;
}
</style>