<template>
  <div class="demo">
    <div id="src-2">
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
      <div id="target-2">
        <p id="msg-2">Drop Here</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragThree",
  mounted() {
    let src = document.querySelector("#src-2");
    let target = document.querySelector("#target-2");
    let msg = document.querySelector("#msg-2");

    let draggedId; // 需要记录被拖放的元素的id，以备后用

    // src
    src.ondragstart = (e) => {
      draggedId = e.target.id;
      e.target.classList.add("dragged");
    };
    src.ondragend = (e) => {
      e.target.classList.remove("dragged");
      msg.innerHTML = "Drop Here";
    };
    src.ondrag = (e) => (msg.innerHTML = e.target.id);

    // dest
    // 添加下面2行代码后，拖放至释放区时，鼠标的标志不再是禁止，而是可接受
    target.ondragenter = (e) => e.preventDefault();
    target.ondragover = (e) => e.preventDefault();

    target.ondrop = (e) => {
      let newElement = document.getElementById(draggedId).cloneNode(false);
      target.innerHTML = "";
      target.appendChild(newElement);
      e.preventDefault();
    };
  }
}
</script>

<style scoped>
#src-2 > * {
  float: left;
}

#src-2::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

#target-2,
#src-2 > img {
  border: thin solid black;
  padding: 2px;
  margin: 4px;
  text-align: center;
}

#target-2 {
  height: 81px;
  width: 81px;
  padding: 2px;
  align-items: center;
  justify-content: center;
  display: flex;
}

img.dragged {
  background-color: #37e33e;
}
</style>