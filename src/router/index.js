import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/views/Login.vue'
import Table from '@/views/Table.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "table",
    component: Table,
    redirect: "/table/articlemanager",
  },
  {
    path: '/login',
    name: "login",
    component: Login
  },
  {
    path: '/table',
    name: "table",
    component: Table,
    redirect: "/table/",
    children: [
      // 首页
      {
        path: 'homepage',
        name: 'homepage',
        component: () => import("@/components/HomePage.vue")
      },
      {
        path: 'articlemanager',
        name: 'articlemanager',
        component: () => import("@/components/ArticleManager.vue"),
        redirect: "articlemanager/articlelist",
        children: [
          { path: 'articlelist', name: 'articlelist', meta: ["文章管理", "文章列表"], component: () => import("@/components/ArticleManager/ArticleList.vue") },
          { path: 'examplelist', name: 'examplelist', meta: ["文章管理", "多层级路由示例"], component: () => import("@/components/ArticleManager/ExampleList.vue") },
        ]
      },
    ]
  }
];

const router = new VueRouter({
  routes,
});


router.beforeEach(function (to, from, next) {
  if (to.path === '/login') { //如果是去login就正常去
    next();
  } else {
    let token = localStorage.getItem("token");
    if (!token) return next({ path: "/login" })
    if (token) return next();
  }
})

export default router;
