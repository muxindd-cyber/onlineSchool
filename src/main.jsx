import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.addEventListener('error', (event) => {
  document.body.innerHTML += `<div style="color: red; padding: 20px; z-index: 9999; position: absolute; top: 0; left: 0; background: white; width: 100%;">
    <h1>Global Error</h1>
    <pre>${event.error?.stack || event.message}</pre>
  </div>`;
});

window.addEventListener('unhandledrejection', (event) => {
  document.body.innerHTML += `<div style="color: red; padding: 20px; z-index: 9999; position: absolute; top: 0; left: 0; background: white; width: 100%;">
    <h1>Unhandled Promise Rejection</h1>
    <pre>${event.reason?.stack || event.reason}</pre>
  </div>`;
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
