import React from 'react'
import ReactDOM from 'react-dom/client'

import { PrimeReactProvider } from 'primereact/api';
        
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>,
)
