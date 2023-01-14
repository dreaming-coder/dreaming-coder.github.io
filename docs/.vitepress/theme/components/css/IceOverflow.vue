<template>
  <div class="demo ice-container">
    <div>
      <p>
        关关雎鸠，在河之洲。窈窕淑女，君子好逑。<br>
        参差荇菜，左右流之。窈窕淑女，寤寐求之。<br>
        求之不得，寤寐思服。悠哉悠哉，辗转反侧。<br>
        参差荇菜，左右采之。窈窕淑女，琴瑟友之。<br>
        参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IceOverflow"
}
</script>

<style scoped>
.ice-container {
  height: 320px;
}
.ice-container > div {
  height: 200px;
}

.ice-container p {
  width: 300px;
  height: 100px;
  border: medium double black;
}
</style>