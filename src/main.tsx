import React from 'react'
import ReactDOM from 'react-dom/client'

import { PrimeReactProvider } from 'primereact/api';

import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { UserContextProvider } from './context/userContext';
import './index.css'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/md-light-indigo/theme.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PrimeReactProvider>
        <UserContextProvider>
        <RouterProvider router={router} >
          
        </RouterProvider>
        </UserContextProvider>
      </PrimeReactProvider>

  </React.StrictMode>,
)
