import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouters from '@routes/AppRouters'
//css
import "@styles/index.css"
//Redux
import { Provider } from 'react-redux'
import { store } from './redux/store'




createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <AppRouters />
  </Provider>

  // </StrictMode>,
)
