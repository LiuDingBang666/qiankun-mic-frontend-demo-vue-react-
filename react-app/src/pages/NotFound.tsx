import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link to="/">Go back Home</Link>
      </p>
    </div>
  )
}

