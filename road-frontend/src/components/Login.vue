<template>
  <div class="login">
    <a @click="login()">카카오로 로그인하기</a>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login() {
      location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.VUE_APP_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:8080/kakao/oauth&response_type=code`;
    },
  },
};
</script>

<style scoped></style>
