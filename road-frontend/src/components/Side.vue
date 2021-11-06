<template>
  <div class="side">
    <div class="top">
      <div class="type">
        <div @click="detail(1)">제보</div>
        <div @click="detail(2)">사고</div>
        <div @click="detail(3)">CCTV</div>
        <div @click="detail(4)">날씨</div>
      </div>
      <input
        class="input-search"
        type="text"
        placeholder="도로명을 입력하세요."
      />
    </div>

    <!-- <SideDetail v-show="show == 1" /> -->
    <SideAccidentDetail v-show="show == 2" />
    <SideCCTVDetail v-show="show == 3" />
    <!-- <SideWeatherDetail v-show="show == 4" /> -->
  </div>
</template>

<script>
// import SideDetail from "../components/SideDetail.vue";
import SideAccidentDetail from "../components/SideAccidentDetail.vue";
import SideCCTVDetail from "../components/SideCCTVDetail.vue";
// import SideWeatherDetail from "../components/SideWeatherDetail.vue";

export default {
  name: "Side",
  created() {},
  components: {
    // SideDetail,
    SideAccidentDetail,
    SideCCTVDetail,
    // SideWeatherDetail,
  },
  methods: {
    detail(show) {
      this.show = show;
    },
  },
  data() {
    return {
      show: 0,
    };
  },
};
</script>

<style scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.side {
  font-family: "NanumSquare", san-serif;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.5;
}

.side {
  width: 25%;
  border: 1px solid black;
}

.top {
  background-color: #17385b;
  text-align: center;
}

.input-search {
  background-color: #17385b;
  border: 1px solid #d7d7d7;
  border-radius: 0.3rem;
  padding: 0.8rem;
  margin: 0.5rem;
  width: 90%;
}

.input-search::placeholder {
  color: #d7d7d7;
}

.type {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
}

.type > div {
  padding-top: 0.45rem;
  padding-bottom: 0.45rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  color: #d7d7d7;
}

.type > div:hover {
  border-radius: 1.5rem;
  background-color: #0d619c;
}
</style>
