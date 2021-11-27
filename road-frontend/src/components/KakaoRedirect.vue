<template>
  <div class="sb-nav-fixed">
    kakao login ...
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "KakaoRedirect",
  created() {
    if (this.$route.query.code) {
      /**
       * 서버 통신
       * 1. kakao code 전송
       * 2. response jwttoken, userinfo
       * 3. jwttoken 는 어디에 저장할까?
       * 4. 로그인 완료 페이지로 routing
       */
      axios
        .post("http://localhost:3000/social", {
          code: this.$route.query.code,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert("err ..");
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
