import { registerMicroApps, start } from 'qiankun';
import { createApp } from 'vue'
import App from "./App.vue";
import {createRouter, createWebHistory} from 'vue-router'
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

createApp(App)
    .use(router)
    .mount('#mic-app')
