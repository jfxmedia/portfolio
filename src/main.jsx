import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // strictmode to check for errors in react app
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
