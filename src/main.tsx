import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { VehicleProvider } from './providers/vehicle/vehicleContext'
import { UserProvider } from './providers/user/userContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <VehicleProvider>
          <App />
        </VehicleProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);