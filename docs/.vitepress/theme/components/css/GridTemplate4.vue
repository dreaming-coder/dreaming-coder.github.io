<template>
  <div class="demo">
    <div class="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridTemplate4"
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr minmax(150px, 1fr);
  grid-template-rows: repeat(4, 100px);
  width: 250px;
  height: 200px;
  border: 0 solid skyblue;
}
.item {
  padding: 35px;
  font-size:40px;
  background-color: #e91e63;
  color: #fff;
}
.item-1 {
  background-color: #f0332a;
}
.item-2 {
  background-color: #f78e29;
}
.item-3 {
  background-color: #4ea848;
}
.item-4 {
  background-color: #0475c4;
}
</style>