'use client'
import { FC } from 'react'
import Link from 'next/link'
import { Container, Box, Grid, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Image from 'next/image'
import logo from '../../../img/logo-footer.png' // Your Logo component

interface Props {
  scrollIs: number
  pageName?: string
}

const Footer: FC<Props> = ({ scrollIs, pageName }) => {
  return (
    <Box sx={{ bgcolor: 'primary.light' }}>
      <footer>
        <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={6} sx={{ mb: 10 }}>
              <Image src={logo} alt="Logo" />
              <Box
                width={370}
                display={'flex'}
                justifyContent={'right'}
                gap={4}
                mr={20}
              >
                <FacebookIcon sx={{ fontSize: 40 }} />
                <InstagramIcon sx={{ fontSize: 40 }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Daruy.ua - твій зручний сервіс для замовлення квітів.
              </Typography>
              <Typography>
                Ще більше інформації в наших соц. мережах.{' '}
              </Typography>
              <Grid container sx={{ pt: 3, pb: 4 }}>
                <Grid item xs={6}>
                  <ul className="list-none">
                    <li>
                      <Link href="#">Квіти</Link>
                    </li>
                    <li>
                      <Link href="#">Букети</Link>
                    </li>
                    <li>
                      <Link href="#">Подарункові набори</Link>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul className="list-none">
                    <li>
                      <Link href="#">Про нас</Link>
                    </li>
                    <li>
                      <Link href="#">Пропозиції</Link>
                    </li>
                    <li>
                      <Link href="#">Інформація</Link>
                    </li>
                  </ul>
                </Grid>
              </Grid>

              <Box sx={{ pb: 4 }}>
                <Typography>Контактна інформація: </Typography>
                <strong>
                  <Link href="tel:+380966290475">+38(0xx)-xxx-xx-xx</Link>
                </strong>
                <Typography>Україна, м.Київ, 02222 </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* <!-- ============ Contacts Bar - START ============ --> */}
          {scrollIs > 2 && (
            <div className="text-center">&copy; 2024 our team</div>
          )}
          {/* <!-- ============ Contacts Bar - END ============ --> */}
        </Container>
      </footer>
    </Box>
  )
}

export default Footer
