import Vue from 'vue';
import VueRouter from 'vue-router';

function lazyLoading(name) {
  return () => import(`./views/${name}.vue`);
}

Vue.use(VueRouter);

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoading('Home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});