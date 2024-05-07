import React from 'react'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import qaimage from '../../../public/assets/design-element-photo.png'
import Image from 'next/image'

function QASection() {
  return (
    <Box pt={25} pb={22} >
      <Container className="qasection" maxWidth="lg" >
        <Grid container justifyContent="space-between" alignItems="flex-start">
          <Grid item xs={12} md={6} >
            <List
              sx={{ width: '100%', maxWidth: 700, mt: '108px' }}
            >
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'secondary.dark', fontsize: '26' }} />
                </ListItemIcon>
                <Box>
                  <Typography variant='h5'>
                    Доставка
                  </Typography>
                  <Typography gutterBottom >
                    Доставку можливо здійснити день в день протягом 4 годин.
                  </Typography>
                  <Typography gutterBottom>
                    Також, ми пропонуємо нашим клієнтам робити замовлення завчасно на обрану дату та час.
                  </Typography>
                  <Typography gutterBottom>
                    Доставка квітів здійснюєтся лише по Києву.
                  </Typography>
                  <Typography gutterBottom>
                    Послуг кур’єрської доставки вже включена до вартості квітів та додаткової оплати не потребує.
                  </Typography>
                </Box>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'secondary.dark', fontsize: '26' }} />
                </ListItemIcon>
                <Box>
                  <Typography variant='h5'>
                    Оплата
                  </Typography>
                  <Typography gutterBottom >
                    Оплату за квіти можна здійснити банківською картою на сайті, терміналом або готвкою  кур’єру.
                  </Typography>
                </Box>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'secondary.dark', fontsize: '26' }} />
                </ListItemIcon>
                <Box>
                  <Typography variant='h5'>
                    Акційні пропозиції
                  </Typography>
                  <Typography gutterBottom >
                    Зареєструвавши ваш аккаунт на нашому сайті, ви можете обрати декілька визначних дат для вас та отримати нагадування про наступаюче свято разом із знижкою 10% на замовлення.
                  </Typography>
                  <Typography gutterBottom>
                    Пропозиція буде дійсна протягом 5 днів до обраної дати та після.
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={qaimage}
              alt="design example"
              style={{
                maxWidth: '481px',
                height: 'auto',
                marginLeft: '58px'
              }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default QASection