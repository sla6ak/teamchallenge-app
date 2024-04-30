import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { mainApi } from './api/mainApi'
import { mobilMenu } from './slices/mobilMenu'
import { scrollView } from './slices/scrollView'
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
import { user } from './slices/user'

const userPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
  user: user.reducer,
  mobilMenu: mobilMenu.reducer,
  scrollView: scrollView.reducer
})

const persistedReducer = persistReducer(userPersistConfig, rootReducer)

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat(mainApi.middleware)
  })
}

export const persistor = persistStore(makeStore())

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof makeStore>
