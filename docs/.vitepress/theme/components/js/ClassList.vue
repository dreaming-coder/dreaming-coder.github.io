<template>
  <div class="demo ice-container">
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "ClassList",
  mounted() {
    // classList 返回元素的类名
    const div = document.querySelector('.box');
    // 1. 添加类名  是在后面追加类名不会覆盖以前的类名 注意前面不需要加 "."
    div.classList.add('three');
    // 2. 删除类名
    div.classList.remove('one');
    // 3. 切换类
    div.addEventListener('click', function () {
      // 如果classList中存在给定的值，删除它，否则，添加它；
      this.classList.toggle('bg');
    })
  }
}
</script>

<style scoped>
.box {
  float: left;
  margin-left: 10px;
  width: 200px;
  height: 100px;
  border: 1px solid #666;
  background-color: #1dd1a1;
}

.bg {
  background-color: hotpink
}
</style>