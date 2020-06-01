import Vue from 'vue'
import Router from 'vue-router'
import Notice from "../views/Notice";
import Login from "../views/Login/index";
import Layout from "../views/Layout";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/notice'
        },
        {
            path: '/notice',
            component: Layout,
            redirect: '/notice/index',
            children: [
                {
                    path: 'index',
                    component: Notice
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
})
