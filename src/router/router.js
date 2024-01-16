import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
var router = new Router({
    routes:[
        {
            path:"/",
            name:'login',
            component:()=>import('../view/Login.vue')
        }
        //新添加的页面都写在这块...
    ]
});
export default router;
