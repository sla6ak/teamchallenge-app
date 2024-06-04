import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'

export default function Auth() {
  return (
    <Layout pageName={ROUTES.Auth.link} title={ROUTES.Auth.title}>
      <div className="flex flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>Вхід до особистого кабінету</h1>
        </div>
      </div>
    </Layout>
  )
}
