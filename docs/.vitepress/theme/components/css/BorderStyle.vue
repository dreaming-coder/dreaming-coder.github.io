<template>
  <div class="demo">
    <div class="border-demo"></div>
  </div>
</template>

<script>
export default {
  name: "BorderStyle"
}
</script>

<style scoped>
.border-demo {
  display: block;
  width: 100px;
  height: 100px;

  border-left-color: red;
  border-left-width: 4px;
  border-left-style: solid;

  border-top-color: cyan;
  border-top-width: 5px;
  border-top-style: inset;

  border-right-color: blue;
  border-right-width: 6px;
  border-right-style: dashed;

  border-bottom-color: orange;
  border-bottom-width: 7px;
  border-bottom-style: dotted;
}
</style>