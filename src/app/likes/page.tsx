import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'

export default function Likes() {
  return (
    <Layout pageName={ROUTES.Likes.link} title={ROUTES.Likes.title}>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>{ROUTES.Likes.title}</h1>
        </div>
      </div>
    </Layout>
  )
}
