// index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import ViewModify from '../modifywiki';
import Detail from '../viewwikidetail';
import Remove from '../removewiki';

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/modify,
            name: 'modifywiki',
            component: ViewModify 
        },
        {
	    path: '/detail/:id'
            name: 'detail',
            component: Detail 
        },
        {
	    path: '/remove/:id',
            name: 'remove',
            component: Remove 
        }
    ]
})
