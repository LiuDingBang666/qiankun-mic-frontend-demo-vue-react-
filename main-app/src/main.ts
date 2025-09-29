import { registerMicroApps, start } from 'qiankun';
import { createApp } from 'vue'
import App from "./App.vue";
import {createRouter, createWebHistory} from 'vue-router'


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


import { initGlobalState, type MicroAppStateActions } from 'qiankun';

// 初始化 state
const actions: MicroAppStateActions = initGlobalState({ name: 'test-main-app'});

//  在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
});
//  按一级属性设置全局状态，微应用中只能修改已存在的一级属性
setInterval(() => {
    actions.setGlobalState({ name: 'test-main-app' + Math.random()});
}, 1000)
// 移除当前应用的状态监听，微应用 umount 时会默认调用
// actions.offGlobalStateChange();

