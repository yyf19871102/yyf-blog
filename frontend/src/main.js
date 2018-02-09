import Vue        from 'vue'
import VueRouter  from 'vue-router'
import axios      from 'axios';

import App        from './App';
import router     from './router';
import tools      from './plugins/tools'
import store      from './vuex/data';

Vue.use(VueRouter)
Vue.use(tools)

Vue.component('ClientNav', require('./pages/client/components/nav_bar.vue').default);
Vue.component('ClientFooter', require('./pages/client/components/footer.vue').default);
Vue.component('ClientSideBar', require('./pages/client/components/side_bar.vue').default);

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.localStorage.user) {
  store.dispatch('setUser', JSON.parse ( window.localStorage.user));
}

new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
