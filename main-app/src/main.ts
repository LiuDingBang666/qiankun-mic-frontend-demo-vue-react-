import { registerMicroApps, start } from 'qiankun';
import { createApp } from 'vue'
import App from "./App.vue";
import {createRouter, createWebHistory, useRouter} from 'vue-router'
console.log('start')
registerMicroApps([
    {
        name: 'reactApp',
        entry: '//localhost:5180',
        container: '#child-app',
        activeRule: '/app-react',
    },
    {
        name: 'vueApp',
        entry: '//localhost:5176',
        container: '#child-app',
        activeRule: '/app-vue',
    },
]);
// 启动 qiankun
start();


const router = createRouter(
    {
        history: createWebHistory(),
        routes: []
    }
)

router.beforeEach((to, from, next) => {
    console.log('from', from)
    console.log('to', to)
    next()
})

createApp(App)
    .use(router)
    .mount('#mic-app')


