<template>
  <div class="demo">
    <div class="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridTemplate7"
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: repeat(4, 100px);
  grid-template-areas: 'a a b'
					 	 'a a b'
						 'c c c';
  width: 400px;
  height: 340px;
  border: 0 solid skyblue;
}

.item {
  padding: 35px;
  font-size:40px;
  background-color: #e91e63;
  color: #fff;
}
.item-1 {
  grid-area: a;
  background-color: #f0332a;
}
.item-2 {
  grid-area:b;
  background-color: #f78e29;
}
.item-3 {
  grid-area: c;
  background-color: #4ea848;
}
</style>