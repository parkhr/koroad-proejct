<template>
  <div class="main">
    <img class="logo" src="@/static/assets/koroad_logo.jpg" />
    <div class="content">
      <Map />
      <Side />
    </div>
    <div style="height: 500px"></div>
    sdnjksdnkj
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import Side from "../components/Side.vue";

export default {
  name: "main",
  created() {},
  components: {
    Map,
    Side,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.logo {
  margin-top: 4rem;
  margin-left: 4rem;
  margin-bottom: 2rem;
}
.content {
  margin-left: 4rem;
  margin-right: 4rem;
  display: flex;
}
</style>
