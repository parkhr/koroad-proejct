<template>
  <div class="login">
    hello login
    <a @click="login()">login</a>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  name: "Login",
  created() {
    if (this.$route.query.code) {
      /**
       * 서버 통신
       * 1. kakao code 전송
       * 2. response jwttoken, userinfo
       * 3. header에 jwttoken 세팅, userinfo 는 어디에 저장할까?
       * 4. 로그인 완료 페이지로 routing
       */
    }
  },
  methods: {
    login() {
      location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.VUE_APP_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:8080/kakao/oauth&response_type=code`;
    },
  },
};
</script>

<style scoped></style>
