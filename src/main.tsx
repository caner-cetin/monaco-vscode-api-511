import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MonacoPage from './routes/code'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MonacoPage />
  </React.StrictMode>,
)