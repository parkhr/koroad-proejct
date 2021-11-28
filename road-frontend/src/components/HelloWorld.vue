<template>
  <div class="hello sb-nav-fixed">
    hello world

    <div v-if="user !== null">{{ user.nickname }}님 환영합니다 ^^</div>

    <div v-if="user === null" @click="login()">로그인 하기</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    console.log(this.user);
  },
  data() {
    return {
      user: this.$store.state.user,
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
