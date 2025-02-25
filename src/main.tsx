import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './global.css'
import './reset.css'

import { RouterProvider } from 'react-router-dom';
import router from './routers/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)