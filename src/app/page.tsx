import Layout from '@/utils/Layout/Layout'
import { ROUTES } from '@/utils/constants/Routes'
import { Typography, Container, Button } from '@mui/material'

export default function Home() {
  return (
    <Layout pageName={ROUTES.Flowers.link} title={ROUTES.Flowers.title}>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full">
          <Container className="hero" maxWidth="lg" >
            <Typography variant="h1" >DARUY</Typography>
            <Typography variant="h3" component="h2"
              sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);' }}
            >квіти швидко та зручно</Typography>
            <Button variant="contained">ЗРОБИТИ ЗАМОВЛЕННЯ</Button>
          </Container>

        </div>
      </div>
    </Layout>
  )
}
