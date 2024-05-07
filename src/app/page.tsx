import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'
import HeroSection from '@/components/UI/HeroSection.tsx/HeroSection'
import QASection from '@/components/UI/QASection'
import FlowersGallery from '@/components/FlowersGallery/FlowersGallery'


export default function Home() {
  return (
    <Layout pageName={ROUTES.Flowers.link} title={ROUTES.Flowers.title}>

      <HeroSection />
      <FlowersGallery />
      <QASection />

    </Layout>
  )
}
