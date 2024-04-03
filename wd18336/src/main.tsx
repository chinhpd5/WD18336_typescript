// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountProvider } from './context/CountProvider.tsx';
import { ProductProvider } from './context/ProductProvider.tsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductProvider>
    <CountProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CountProvider>
  </ProductProvider>
 
)
