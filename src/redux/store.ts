import { configureStore } from '@reduxjs/toolkit'
import categories from './categories/categoriesSlice'
import Products from './products/productsSlice'
import theme from './theme/themeSlice'

export const store = configureStore({
    reducer: {
        categories,
        Products,
        theme,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store;