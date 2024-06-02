import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'

export default function Ocasions() {
  return (
    <Layout pageName={ROUTES.Ocasions.link} title={ROUTES.Ocasions.title}>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>{ROUTES.Ocasions.title}</h1>
        </div>
      </div>
    </Layout>
  )
}
