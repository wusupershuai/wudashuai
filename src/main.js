import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import debounce from "./plugins/debounce"
Vue.use(ElementUI)
Vue.use(debounce)
Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  require('./mock/index.js')
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
