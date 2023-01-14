<template>
  <div class="demo">
    <div class="example"></div>
  </div>
</template>

<script>
export default {
  name: "HorizonDemo"
}
</script>

<style scoped>
.example {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 1s linear 0s;
}

.example:hover {
  width: 300px;
}

</style>