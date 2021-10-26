<template>
  <div class="side-accident-detail">
    <div class="title">사고정보 (YY.MM.DD.HH)</div>
    <div class="list">
      <div class="list-header">
        <div>도로명</div>
        <div>사고수</div>
      </div>
      <div class="list-body" v-for="content in contents" v-bind:key="content">
        {{ content.roadName }} {{ content.count }}
      </div>
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
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
        { roadName: "무진대로", count: 10 },
      ],
    };
  },
};
</script>
<style scoped>
.title {
  margin-left: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.list-header {
  display: flex;
  border: 1px solid black;
  padding-top: 0.3rem;
  padding-left: 0.6rem;
}

.side-accident-detail {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 600px;
}

.side-accident-detail > * {
  text-align: left;
}

.list-body {
  border: 1px solid black;
  padding: 0.3rem;
}
</style>
