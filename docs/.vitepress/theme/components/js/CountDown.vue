<template>
  <div class="demo ice-container">
    <div class="count-container">
      <b>倒计时</b>
      <div class="ice-box">
        <div class="item hour"><p class="num">00</p></div>
        <p class="sign">:</p>
        <div class="item minute"><p class="num">00</p></div>
        <p class="sign">:</p>
        <div class="item second"><p class="num">00</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDown",
  mounted() {
    let hourNode = document.querySelector(".hour");
    let minuteNode = document.querySelector(".minute");
    let secondNode = document.querySelector(".second");

    const target = +new Date() + 24 * 60 * 60 * 1000;

    function countDown() {
      let nowTime = +new Date();

      let times = (target - nowTime) / 1000;
      if (times <= 0) {
        clearInterval(timer);
        return;
      }
      let h = parseInt((times / 60 / 60) % 24); //时
      h = h < 10 ? "0" + h : h;
      let m = parseInt((times / 60) % 60); //分
      m = m < 10 ? "0" + m : m;
      let s = parseInt(times % 60); //秒
      s = s < 10 ? "0" + s : s;
      hourNode.firstChild.innerText = h;
      minuteNode.firstChild.innerText = m;
      secondNode.firstChild.innerText = s;
    }

    const timer = setInterval(() => {
      countDown()
    }, 1000);
  }
}
</script>

<style scoped>
.demo {
  height: 150px;
}
.count-container {
  width: 400px;
  height: 200px;
  text-align: center;
}

.ice-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 220px;
  height: 60px;
}

.item {
  display: inline-block;
  height: 60px;
  width: 60px;
  background-color: rgb(29, 133, 224);
}

.sign {
  margin: auto;
  font-size: 2.5rem;
  color: rgb(29, 133, 224);
}

.num {
  margin: 12px auto;
  font-family: "Times New Roman", Times, serif;
  font-weight: 800;
  font-size: 2rem;
  color: aliceblue;
}
</style>