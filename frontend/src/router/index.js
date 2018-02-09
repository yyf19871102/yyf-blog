import Vue    from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/client/basic',
      component: (resolve) => require(['../pages/client/layout'], resolve),
      children: [
        {
          path: '/client/articleList',
          component: (resolve) => require(['../pages/client/article_list'], resolve)
        },
        {
          path: '/client/articleDetail',
          component: (resolve) => require(['../pages/client/article_detail'], resolve)
        },
        {
          path: '/client/aboutMe',
          component: (resolve) => require(['../pages/client/about_me'], resolve)
        },
        {
          path: '/client/error',
          component: (resolve) => require(['../pages/client/404'], resolve)
        },
      ]
    },
  ]
});

export default router;
