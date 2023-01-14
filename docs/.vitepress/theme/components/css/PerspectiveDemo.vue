<template>
  <div class="demo">
    <div id="div1">
      <div id="div2">HELLO</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerspectiveDemo"
}
</script>

<style scoped>
#div1 {
  position: relative;
  height: 150px;
  width: 150px;
  margin: 20px;
  padding: 10px;
  border: 1px solid black;
  perspective: 150px;
}

#div2 {
  padding: 50px;
  position: absolute;
  border: 1px solid black;
  background-color: yellow;
  transform: rotateX(45deg);
}
</style>