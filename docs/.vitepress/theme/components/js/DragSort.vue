<template>
  <div class="demo ice-container">
    <div class="list" ref="box">
      <div class="item" ref="items" draggable="true" @dragstart="dragStart($event, item, index)"
           @dragenter="dragEnter" @dragover="dragover"
           @drop="drop" @dragleave="dragleave"
           v-for="(item, index) in sentences" :key="index">
        <li style="list-style-type: square">{{ item }}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DragSort",
  data() {
    return {
      sentences: [
        '我自俯察世人，你亦怜惜众生。',
        '我与春风皆过客，你携秋水揽星河。',
        '爱意随风起，风止意难平。',
        '衣带渐宽终不悔，为伊消得人憔悴。',
        '此情可待成追忆，只是当时已惘然。',
        '人生自是有情痴，此恨不关风与月。'
      ],
      src_index: -1,
      src_text: "",
      dest_index: -1,
      dest_text: "",
    }
  },
  methods: {
    dragStart(event, item, index) {
      e.dataTransfer.setData("text", item);
    },
    dragEnter() {

    },
    dragover() {

    },
    dragleave() {

    },
    drop() {

    }
  }
}
</script>

<style scoped>
.list {
  margin: 10px;
}

.item {
  display: flex;
  align-items: center;
  width: 500px;
  height: 40px;
  background-color: aliceblue;
  margin-top: 5px;
  padding: 5px 15px;
  font-size: 1.2rem;
  font-weight: 1000;
  color: rgba(89, 97, 199, 0.986);
}

.item:hover {
  cursor: move;
}

.border {
  border: 1px solid rgb(226, 11, 11);
}
</style>