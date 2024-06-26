'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, persistor, AppStore } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

interface Props {
  children: React.ReactNode
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
