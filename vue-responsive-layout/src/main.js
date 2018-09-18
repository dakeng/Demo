import './assets/styles/tailwind.scss';
import './assets/styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false
router.afterEach((to, from) => {
  if (to.name === from.name) return;
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 1);
});



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
