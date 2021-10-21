<template>
  <div id="app">
    <Map />
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Map,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
