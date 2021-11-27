import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";
import KakaoRedirect from "./components/KakaoRedirect";
Vue.use(VueRouter);

const routes = [
  { path: "/foo", component: HelloWorld },
  { path: "/login", component: Login },
  { path: "/kakao/oauth", component: KakaoRedirect },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
