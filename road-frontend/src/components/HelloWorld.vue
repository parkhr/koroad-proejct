<template>
  <div class="hello sb-nav-fixed">
    hello world
    <div @click="login()">로그인 하기</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {},
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
