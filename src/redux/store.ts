import categories from './categories/categoriesSlice'
import Products from './products/productsSlice'
import theme from './theme/themeSlice'
import cart from './cart/cartSlice'
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

const rootpersistConfig = {
    key: 'cart',
    storage,
    debug: true,
    whitelist: ['items']
}

const rootReducer = combineReducers({
    categories,
    Products,
    theme,

    cart: persistReducer(rootpersistConfig, cart),
})
// const persistedReducer = persistReducer(rootpersistConfig, rootReducer)
const store = configureStore({
    reducer: rootReducer,

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

