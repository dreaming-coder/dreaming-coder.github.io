<template>
  <div class="demo">
    <div id="test-scale"></div>
  </div>
</template>

<script>
export default {
  name: "ScaleDemo"
}
</script>

<style scoped>
#test-scale {
  width: 200px;
  height: 200px;
  background-color: #14d5bb;
}

#test-scale:hover {
  transform: scale(2, 1);
  transform-origin: left top;
}
</style>