import { Container, Grid, Pagination, Stack, Typography } from '@mui/material'
import FlowerCard from '../../FlowerCard/FlowerCard'
import { flowersMocked } from './flowersMocked'

type FlowerCardProps = {
  id: string
  title: string
  image: string
  price: number
}

type FlowersGalleryProps = {
  flowers: FlowerCardProps[]
}

const FlowersGallery = () => {
  const flowers = flowersMocked.slice(0, 3)

  return (
    <div className="mt-32">
      <Typography sx={{ fontWeight: '300', mb: '50px' }} variant="h2">
        Обирай найкраще
      </Typography>

      <Grid container spacing={3}>
        {flowers.map((flower) => (
          <Grid item xs={12} md={6} lg={4} key={1}>
            <FlowerCard key={flower.id} {...flower} />
          </Grid>
        ))}
      </Grid>

      {/* <Grid container justifyContent="center" mt={3} >
        <Stack spacing={2} >
          <Pagination count={9} color="secondary" />
        </Stack>
      </Grid> */}
    </div>
  )
}

export default FlowersGallery
