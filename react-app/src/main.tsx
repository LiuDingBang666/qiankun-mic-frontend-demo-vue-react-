import { StrictMode } from 'react'
import {createRoot, type Root} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import renderWithQiankun, {qiankunWindow} from "vite-plugin-qiankun/es/helper";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";

let app: Root | null = null

function render(props: any = {}) {
    console.log('render', props)
    // 如果app已经存在，则先卸载
    app?.unmount()
    app = createRoot(document.getElementById('root')!)
    app.render(
        <StrictMode>
            <BrowserRouter basename={'/app-react'}>
                    <Routes>
                        <Route path="/" element={<App />}/>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}


if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render()
}

renderWithQiankun({
    bootstrap() {
        console.log('app-react bootstrap')
        return Promise.resolve() },
    mount(props) {
        console.log('app-react mount', props)
        render(props) },
    unmount(_props) {
        console.log('app-react unmount')
        app?.unmount()
        app = null
    },
    update(props) {
        console.log('app-react update', props)
        render(props) }
})