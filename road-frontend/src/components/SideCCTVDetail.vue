<template>
  <div class="side-cctv-detail">
    <div>
      <div>CCTV정보 (YY.MM.DD.HH)</div>
      <div>TOTAL {{ contents.size }}건</div>
    </div>
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
