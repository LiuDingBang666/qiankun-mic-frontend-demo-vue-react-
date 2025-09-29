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
    bootstrap() { return Promise.resolve() },
    mount(props) { render(props) },
    unmount(_props) {
        app?.unmount()
        app = null
    },
    update(props) { render(props) }
})