import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'

export default function FlowersTypes() {
  const title = ROUTES.FlowersTypes
  return (
    <Layout
      pageName={ROUTES.FlowersTypes.link}
      title={ROUTES.FlowersTypes.title}
    >
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>{ROUTES.FlowersTypes.title}</h1>
        </div>
      </div>
    </Layout>
  )
}
