import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'

export default function Home() {
  return (
    <Layout pageName={ROUTES.Flowers} title="Flowers">
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>hello world!!!!!!</h1>
        </div>
      </div>
    </Layout>
  )
}
