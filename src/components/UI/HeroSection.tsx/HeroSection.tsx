'use client'
import React from 'react'
import './HeroSection.css'
import { Typography, Container, Button, Box } from '@mui/material'

function HeroSection() {
  return (
    <Container className="hero-section" maxWidth="lg" >
      <Typography variant="h1" >DARUY</Typography>
      <Typography variant="h3" component="h2"
        sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginBottom: '50px' }}
      >квіти швидко та зручно</Typography>
      <Button size='large' variant="contained" sx={{ marginLeft: '376px', padding: '17px 32px', whiteSpace: 'nowrap' }}>
        ЗРОБИТИ ЗАМОВЛЕННЯ
      </Button>

      <div className='about' >
        <div className='about-text'>
          <Typography variant="h3" gutterBottom>
            Daruy.ua
          </Typography>
          <Typography variant="h5">
            допоможе зробити свято кращим та висловити свої почуття
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default HeroSection