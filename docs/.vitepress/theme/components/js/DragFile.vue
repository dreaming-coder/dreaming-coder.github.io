<template>
  <div class="demo ice-container">
    <div id="target">
      <p id="msg">Drop Files Here</p>
    </div>
    <table id="data"></table>
  </div>
</template>

<script>
export default {
  name: "DragFile",
  mounted() {
    const target = document.querySelector("#target");
    target.ondragenter = e => e.preventDefault();
    target.ondragover = e => e.preventDefault();
    target.ondrop = e => {
      // 获取拖放到指定区域的文件列表
      const files = e.dataTransfer.files;
      const tableElem = document.querySelector("#data");
      tableElem.innerHTML = " <tr><th>Name</th> <th> Type</th><th>Size</th></tr>";
      for (let file of files) {
        let row = "<tr><td>" + file.name + "</td><td>" +
            file.type + "</td><td>" +
            file.size + "字节</td></tr>";
        tableElem.innerHTML += row;
      }
      e.preventDefault();
      tableElem.style.visibility = 'visible'
    };
  }
}
</script>

<style scoped>
#target, #data {
  float: left;
}

#target {
  border: medium double black;
  margin: 4px;
  height: 75px;
  width: 200px;
  text-align: center;
  display: table;
}

#target > p {
  display: table-cell;
  vertical-align: middle;
}

#data {
  margin: 4px;
  border: 1px solid;
  border-collapse: collapse;
  visibility: hidden;
}

th, td {
  padding: 4px;
  border: 1px solid;
}
</style>