'use client'

import { useRouter } from 'next/router'
import { useAppSelector } from '@/hooks/reduxHooks'

function PrivateRoute({ children }: any) {
  const router = useRouter()
  const token = useAppSelector((state: any) => state.user.token)
  if (token.length < 1) {
    router.push('/')
  }
  return children
}
export default PrivateRoute
