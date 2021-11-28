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
       * 2. response jwttoken
       * 3. get userinfo
       * 4. jwttoken 는 어디에 저장할까? = cookie
       * 5. 로그인 완료 페이지로 routing
       */
      axios
        .post("http://localhost:3000/social", {
          code: this.$route.query.code,
        })
        .then((res) => {
          this.$cookies.set("accessToken", res.data.access_token);
          axios
            .get("http://localhost:3000/user", {
              headers: {
                Authorization: `Bearer ${this.$cookies.get("accessToken")}`,
              },
            })
            .then((res) => {
              this.$store.commit("setUser", res.data);
            })
            .then(() => {
              this.$router.push("/");
            })
            .catch(() => {
              throw Error();
            });
        })
        .catch(() => {
          alert("로그인에 실패했습니다. 다시 시도해주세요.");
          this.$router.push("/login");
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
