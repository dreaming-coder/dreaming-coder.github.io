<template>
  <div class="demo">
    <div id="xhr-div"></div>
  </div>
</template>

<script>
export default {
  name: "Ajax",
  mounted() {
    let div = document.querySelector("#xhr-div");
    div.addEventListener("click", () => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          div.innerHTML = xhr.responseText;
        }
      };
      xhr.open("GET", "/poem.txt", true); // 相对当前地址
      xhr.send(null);
    })
  }
}
</script>

<style scoped>
#xhr-div {
  margin: 5px auto;
  padding: 10px;
  width: 320px;
  height: 70px;
  background-color: #1eff65;
  font-size: large;
  text-align: center;
}
</style>