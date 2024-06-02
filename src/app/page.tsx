import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'
import { Container, Box, Grid, Typography } from '@mui/material'
import HeroSection from '@/components/UI/HeroSection.tsx/HeroSection'
import QASection from '@/components/UI/QASection/QASection'
import FlowersGallery from '@/components/UI/FlowersGallery/FlowersGallery'

export default function Home() {
  return (
    <Layout pageName={ROUTES.Home.link} title={ROUTES.Home.title}>
      <div className="flex flex-col items-center justify-between">
        <Container maxWidth="lg">
          <HeroSection />
          <FlowersGallery />
          <QASection />
        </Container>
      </div>
    </Layout>
  )
}
