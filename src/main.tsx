import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouters from '@routes/AppRouters'




createRoot(document.getElementById('root')!).render(

    <AppRouters  />
  // <StrictMode>
  // </StrictMode>,
    )
