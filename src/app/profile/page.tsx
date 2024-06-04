import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'

export default function Profile() {
  return (
    <Layout pageName={ROUTES.Profile.link} title={ROUTES.Profile.title}>
      <div className="flex flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>{ROUTES.Profile.title}</h1>
        </div>
      </div>
    </Layout>
  )
}
