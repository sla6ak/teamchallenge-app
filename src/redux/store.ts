import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import { mainApi } from './api/mainApi'
import { user } from './slices/user'

const userPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
  token: user.reducer
})

const persistedReducer = persistReducer(userPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(mainApi.middleware)
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch