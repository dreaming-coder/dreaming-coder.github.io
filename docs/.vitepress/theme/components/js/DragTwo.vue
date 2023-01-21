<template>
  <div class="demo">
    <div id="src-1">
      <img
          draggable="true"
          id="流川枫"
          src="/imgs/web/js/js-drag-1.webp"
          width="81px"
          alt="流川枫"
      />
      <img
          draggable="true"
          id="IU"
          src="/imgs/web/js/js-drag-2.webp"
          width="81px"
          alt="IU"
      />
      <img
          draggable="true"
          id="动漫"
          src="/imgs/web/js/js-drag-3.webp"
          width="81px"
          alt="动漫"
      />
      <div id="target-1">
        <p id="msg-1">Drop Here</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragTwo",
  mounted() {
    let src = document.querySelector("#src-1");
    let msg = document.querySelector("#msg-1");
    src.ondragstart = (e) => e.target.classList.add("dragged");
    src.ondragend = (e) => {
      e.target.classList.remove("dragged");
      msg.innerHTML = "Drop Here";
    };
    src.ondrag = (e) => (msg.innerHTML = e.target.id); // 这里给图片的id已经重命名，便于演示识别
  }
}
</script>

<style scoped>
#src-1 > * {
  float: left;
}
#src-1::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
#target-1,
#src-1 > img {
  border: thin solid black;
  padding: 2px;
  margin: 4px;
}
#target-1 {
  height: 81px;
  width: 81px;
  text-align: center;
  display: table;
}
#target-1 > p {
  display: table-cell;
  vertical-align: middle;
}
#target-1 > img {
  margin: 1px;
}
img.dragged {
  background-color: #37e33e;
}
</style>