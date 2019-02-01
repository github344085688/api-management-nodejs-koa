// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import app from './app.vue';
import router from './router/router';
import VeeValidate from "vee-validate";
import RxEvent from './directives/rx-event';
import { Message } from 'element-ui';


Vue.use(VeeValidate);
Vue.use(RxEvent);
Vue.config.productionTip = false;


/* eslint-disable no-new */
let v = new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>'
});

