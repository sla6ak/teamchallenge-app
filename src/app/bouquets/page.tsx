import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'

export default function Bouquets() {
  return (
    <Layout pageName={ROUTES.Bouquets.link} title={ROUTES.Bouquets.title}>
      <div className="flex flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>{ROUTES.Bouquets.title}</h1>
        </div>
      </div>
    </Layout>
  )
}
