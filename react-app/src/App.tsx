import { NavLink, useSearchParams } from 'react-router-dom'
import './App.css'

function App() {
    let [params] = useSearchParams()
    console.log('token', params.get('token'))
  return (
    <>
      <nav className="main-nav">
        <NavLink to="/home" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </>
  )
}

export default App
