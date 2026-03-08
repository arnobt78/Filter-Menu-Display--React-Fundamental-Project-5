/**
 * Application entry point. Mounts the root React component into the DOM.
 * StrictMode helps surface potential issues (e.g. side effects) during development.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// createRoot (React 18+) replaces the legacy ReactDOM.render API
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
