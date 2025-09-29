import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import renderWithQiankun, {qiankunWindow} from "vite-plugin-qiankun/es/helper";




let app: ReturnType<typeof createApp> | null = null

function render(props: any = {}) {
    const { container } = props
    app?.unmount()
    app = createApp(App).use(router)
    app.mount(container ? container.querySelector('#app') : '#app')
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render()
}

renderWithQiankun({
    bootstrap() {
        console.log('[vue] vue app bootstraped')
        return Promise.resolve() },
    mount(props) {
        console.log('[vue] vue app mounted',  props)
        render(props) },
    unmount(props) {
        console.log('[vue] vue app unmounted',  props)
        app?.unmount()
        app = null
    },
    update(props) {
        console.log('[vue] vue app updated',  props)
        render(props) }
})