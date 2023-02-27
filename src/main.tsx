import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { VehicleProvider } from './providers/vehicle/vehicleContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VehicleProvider>
        <App />
      </VehicleProvider>
    </BrowserRouter>
  </React.StrictMode>
);