import { StrictMode } from 'react'
import {createRoot, type Root} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import renderWithQiankun, {qiankunWindow} from "vite-plugin-qiankun/es/helper";

let app: Root | null = null

function render(props: any = {}) {
    console.log('render', props)
    // 如果app已经存在，则先卸载
    app?.unmount()
    app = createRoot(document.getElementById('root')!)
    app.render(
        <StrictMode>
            <BrowserRouter basename={'/app-react'}>
                <App />
            </BrowserRouter>
        </StrictMode>
    )
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