'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { ROUTES } from '@/utils/constants/Routes'
import styles from '../../../styles/Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { openMobilMenuAction } from '@/redux/slices/mobilMenu'
import { closeMobilMenuAction } from '@/redux/slices/mobilMenu'
import { Container, Box, Grid, Typography } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Image from 'next/image'
import logo from '../../../img/logo-footer.png' // Your Logo component
// import AdminLogHandler from '../adminLogHandler/AdminLogHandler'

type RootState = {
  mobilMenu: boolean
}
interface Props {
  pageName?: string
  titleHeader?: string
}

const Header: FC<Props> = ({ pageName, titleHeader }) => {
  const { token } = useSelector((state: any) => state.user)
  const [modal, setModal] = useState<boolean>(false)
  const { mobilMenu } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  const mobilMenuHandel = () => {
    dispatch(openMobilMenuAction(true))
  }
  const closeMobilMenu = () => {
    dispatch(closeMobilMenuAction(false))
  }
  return (
    <header
      id="master-header"
      className={pageName === ROUTES.Home.link ? 'full-screen overlayed' : ''}
    >
      <div className="top-header">
        <Container
          maxWidth="lg"
          sx={{ pt: 4, pb: 4 }}
          className="h16 text-black"
        >
          <Box className=" flex flex-row justify-between">
            {/* <Link id="nav-toggle" href="#" onClick={mobilMenuHandel}>
            <span></span>
          </Link> */}
            <Link href="/" className="">
              <Image src={logo} alt="Logo" width={170} height={58} />
            </Link>
            <nav id="nav-menu" className={mobilMenu ? 'mobile' : ''}>
              <ul className={styles.nav_container}>
                <li
                  className={pageName === ROUTES.Profile.link ? 'selected' : ''}
                >
                  <Link
                    className={styles.nav_link}
                    title={ROUTES.Profile.title}
                    href={ROUTES.Profile.link}
                    onClick={closeMobilMenu}
                  >
                    <AccountCircleIcon sx={{ color: '#ffb300' }} />
                    {ROUTES.Profile.title}
                  </Link>
                </li>
                <li
                  className={pageName === ROUTES.Likes.link ? 'selected' : ''}
                >
                  <Link
                    className={styles.nav_link}
                    title={ROUTES.Likes.title}
                    href={ROUTES.Likes.link}
                    onClick={closeMobilMenu}
                  >
                    <GradeIcon sx={{ color: '#ffb300' }} />
                    {ROUTES.Likes.title}
                  </Link>
                </li>
                <li
                  className={
                    pageName === ROUTES.ShoppingCart.link ? 'selected' : ''
                  }
                >
                  <Link
                    className={styles.nav_link}
                    title={ROUTES.ShoppingCart.title}
                    href={ROUTES.ShoppingCart.link}
                    onClick={closeMobilMenu}
                  >
                    <ShoppingCartIcon sx={{ color: '#ffb300' }} />
                    {ROUTES.ShoppingCart.title}
                  </Link>
                </li>
                <li className={pageName === 'contactUs' ? 'selected' : ''}></li>

                {token.length > 1 && (
                  <li className={styles.logout}>
                    <Link
                      title={ROUTES.Home.title}
                      href="#"
                      onClick={() => {
                        setModal(true)
                      }}
                    >
                      {token.length < 1 ? 'Login' : 'Logout'}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </Box>
        </Container>
        <Container>
          <nav id="nav-menu" className={mobilMenu ? 'mobile' : ''}>
            <ul className={styles.nav_container}>
              <li
                className={pageName === ROUTES.Flowers.link ? 'selected' : ''}
              >
                <Link
                  className={styles.nav_link}
                  title={ROUTES.Flowers.title}
                  href={ROUTES.Flowers.link}
                  onClick={closeMobilMenu}
                >
                  {ROUTES.Flowers.title}
                </Link>
              </li>
              <li
                className={pageName === ROUTES.Bouquets.link ? 'selected' : ''}
              >
                <Link
                  className={styles.nav_link}
                  title={ROUTES.Bouquets.title}
                  href={ROUTES.Bouquets.link}
                  onClick={closeMobilMenu}
                >
                  {ROUTES.Bouquets.title}
                </Link>
              </li>
              <li
                className={pageName === ROUTES.GiftSets.link ? 'selected' : ''}
              >
                <Link
                  className={styles.nav_link}
                  title={ROUTES.GiftSets.title}
                  href={ROUTES.GiftSets.link}
                  onClick={closeMobilMenu}
                >
                  {ROUTES.GiftSets.title}
                </Link>
              </li>
              <li className={pageName === 'contactUs' ? 'selected' : ''}></li>

              {/* {token.length > 1 && (
                <li className={styles.logout}>
                  <Link
                    title={ROUTES.Home.title}
                    href="#"
                    onClick={() => {
                      setModal(true)
                    }}
                  >
                    {token.length < 1 ? 'Login' : 'Logout'}
                  </Link>
                </li>
              )} */}
            </ul>
          </nav>
        </Container>
        <Link
          title={ROUTES.Auth.title}
          href={ROUTES.Auth.link}
          onClick={closeMobilMenu}
          className="block h-16 w-full text-center py-4 bg-amber-500 text-white font-semibold text-xl hover:bg-amber-600"
        >
          Зареєструйся та отримай знижку 10% на особливі дати
        </Link>
        <Container
          maxWidth="lg"
          sx={{ pt: 4, pb: 4 }}
          className="h16 text-black"
        >
          <Link
            className=""
            title={ROUTES.Home.title}
            href="/"
            onClick={closeMobilMenu}
          >
            {ROUTES.Home.title}
          </Link>
          {/* Головна */}
        </Container>
      </div>
    </header>
  )
}

export default Header
