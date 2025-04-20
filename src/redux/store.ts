import categories from './categories/categoriesSlice'
import Products, { productsSlice } from './products/productsSlice'
import theme from './theme/themeSlice'
import cart from './cart/cartSlice'
import authSlice from './auth/authSlice'
import filterSlice from './filters/filterSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import themeSlice from './theme/themeSlice'

// //////////////
// export const store = configureStore({
//     reducer: {
//         Products,
//         theme,
//         categories,
//         cart,
//     },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// export default store;
// /////////////
const rootPersistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "auth"],
};

const authPersistConfig = {
    key: "auth",
    storage,
    debug: true,
    whitelist: ["user", "accessToken"],
};
const cartPersistConfig = {
    key: 'cart',
    storage,
    debug: true,
    whitelist: ['items']
}
const themePersistConfig = {
    key: 'theme',
    storage,
    debug: true,
    whitelist: ['theme']
}
const ProductsPersistConfig = {
    key: 'Products',
    storage,
    debug: true,
    // whitelist: ['PaginationCount', 'PaginationCountList']
}

const rootReducer = combineReducers({
    // authSlice,
    authSlice: persistReducer(authPersistConfig, authSlice),
    categories,
    Products: persistReducer(ProductsPersistConfig, Products),
    filterSlice,
    theme: persistReducer(themePersistConfig, themeSlice),
    cart: persistReducer(cartPersistConfig, cart),

})
const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {

                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store)

export { persistor, store }

