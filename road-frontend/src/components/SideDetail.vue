<template>
  <div class="side-detail">
    <div>제보정보 (YY.MM.DD.HH)</div>
    <!-- <div>사고정보 (YY.MM.DD.HH)</div>
      <div>CCTV정보 (YY.MM.DD.HH)</div>
      <div>날씨정보 (YY.MM.DD.HH)</div> -->
    <div>도로명</div>
    <div v-for="content in contents" v-bind:key="content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SideDetail",
  created() {},
  data() {
    return {
      contents: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-detail {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 600px;
}

.side-detail > * {
  align-self: stretch;
  text-align: left;
}
</style>
