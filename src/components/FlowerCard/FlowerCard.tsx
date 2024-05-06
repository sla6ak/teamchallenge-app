import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import React from 'react'

type FlowerCardProps = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const FlowerCard: React.FC<FlowerCardProps> = ({ id, title, image, price }) => {

  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>

        {/* винести в окремий клієнтський компонент, onClick add to cart */}
        <Box display="flex" justifyContent="center">
          <Button size='large' variant="contained" >Замовити</Button>
        </Box>

      </CardContent>
    </Card>
  )
}

export default FlowerCard
