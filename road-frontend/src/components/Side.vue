<template>
  <div class="side">
    <div class="top">
      <div class="type">
        <div>제보</div>
        <div>사고</div>
        <div>CCTV</div>
        <div>날씨</div>
      </div>
      <input
        class="input-search"
        type="text"
        placeholder="도로명을 입력하세요."
      />
    </div>

    <div class="detail">
      <div>제보정보 (YY.MM.DD.HH)</div>
      <!-- <div>사고정보 (YY.MM.DD.HH)</div>
      <div>CCTV정보 (YY.MM.DD.HH)</div>
      <div>날씨정보 (YY.MM.DD.HH)</div> -->
      <div>도로명</div>
      <div v-for="content in contents" v-bind:key="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Side",
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

.detail {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 600px;
}

.detail > * {
  align-self: stretch;
  text-align: left;
}
</style>
