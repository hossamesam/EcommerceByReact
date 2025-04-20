import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouters from '@routes/AppRouters'
//css
import "@styles/index.css"
//Redux
import { Provider } from 'react-redux'
import { store, persistor } from '@redux/store'
import { PersistGate } from 'redux-persist/integration/react'


const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <AppRouters />
    {/* </PersistGate> */}
  </Provider>
);

