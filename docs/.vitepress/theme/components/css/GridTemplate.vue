<template>
  <div class="demo">
    <div class="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
      <div class="item item-10">10</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridTemplate"
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: repeat(4, 100px);
  width: 400px;
  height: 400px;
  border: 0px solid skyblue;
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

.item-5 {
  background-color: #bf76ad;
}

.item-6 {
  background-color: #f5d19e;
}

.item-7 {
  background-color: #b7a57d;
}

.item-8 {
  background-color: #d4e5ad;
}

.item-9 {
  background-color: #51c3e6;
}
</style>