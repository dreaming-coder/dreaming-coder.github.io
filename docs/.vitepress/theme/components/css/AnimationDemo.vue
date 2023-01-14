<template>
  <div class="demo">
    <div id="test-animation"></div>
  </div>
</template>

<script>
export default {
  name: "AnimationDemo"
}
</script>

<style scoped>
#test-animation {
  width: 100px;
  height: 100px;
  background: cyan;
  animation-name: stretch;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: running;
}
@keyframes stretch {
  from {
    width: 100px;
  }
  25% {
    width: 200px;
  }
  50% {
    width: 300px;
  }
  75% {
    width: 400px;
  }
  to {
    width: 500px;
  }
}
#test-animation:hover {
  animation-play-state: paused;
}
</style>