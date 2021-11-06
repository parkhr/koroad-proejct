import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// const route = [{ path: "/", component: App }];
const router = new VueRouter({ mode: "history" });

export default router;
