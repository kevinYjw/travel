// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import fastClick from 'fastclick';
import store from './store';

// 组件
import VueAwesomeSwiper from 'vue-awesome-swiper';


// 基础样式
import '@/styles/iconfont/iconfont.css';
import '@/styles/main.css';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
