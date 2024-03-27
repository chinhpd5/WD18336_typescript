// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountProvider } from './context/CountProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CountProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </CountProvider>
)
