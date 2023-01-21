<template>
  <div class="demo">
    <div id="src-pre">
      <img
          draggable="true"
          id="img01-pre"
          src="/imgs/web/js/js-drag-1.webp"
          width="81px"
          alt="img1"
      />
      <img
          draggable="true"
          id="img02-pre"
          src="/imgs/web/js/js-drag-2.webp"
          width="81px"
          alt="img2"
      />
      <img
          draggable="true"
          id="img03-pre"
          src="/imgs/web/js/js-drag-3.webp"
          width="81px"
          alt="img3"
      />
      <div id="target-pre">
        <p>Drop Here</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragOne"
}
</script>

<style scoped>
#src-pre > * {
  float: left;
}

#src-pre::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

#target-pre,
#src-pre > img {
  border: thin solid black;
  padding: 2px;
  margin: 4px;
}

#target-pre {
  height: 81px;
  width: 81px;
  text-align: center;
  display: table;
}

#target-pre > p {
  display: table-cell;
  vertical-align: middle;
}

#target-pre > img {
  margin: 1px;
}
</style>