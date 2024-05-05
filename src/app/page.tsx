import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'
import HeroSection from '@/components/UI/HeroSection.tsx/HeroSection'
import QASection from '@/components/UI/QASection'

export default function Home() {
  return (
    <Layout pageName={ROUTES.Flowers.link} title={ROUTES.Flowers.title}>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full">
          <HeroSection />
          <QASection />
        </div>
      </div>
    </Layout>
  )
}
