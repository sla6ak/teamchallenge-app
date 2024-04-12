'use client'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/hooks/reduxHooks'

function AdminRoute({ children }: any) {
  const router = useRouter()
  const login = useAppSelector((state: any) => state.user.login)
  if (login !== 'admin') {
    router.push('/')
  }
  return children
}
export default AdminRoute
