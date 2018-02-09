import Vue    from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/basic',
      component: (resolve) => require(['../pages/client/layout'], resolve),
      children: [
        {
          path: '/client/articleList',
          component: (resolve) => require(['../pages/client/article_list'], resolve)
        },
      ]
    },
  ]
});

export default router;
