'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { ROUTES } from '@/utils/constants/Routes'
import styles from '../../styles/Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { openMobilMenuAction } from '@/redux/slices/mobilMenu'
import { closeMobilMenuAction } from '@/redux/slices/mobilMenu'
import Modal from '../Modal/Modal'
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
      className={pageName === ROUTES.Flowers ? 'full-screen overlayed' : ''}
    >
      <div className="top-header">
        <div className="container">
          {pageName !== ROUTES.Flowers && (
            <h1 id="logo">
              <Link href="/">
                <img src={'#'} alt="" />
              </Link>
            </h1>
          )}
          <Link id="nav-toggle" href="#" onClick={mobilMenuHandel}>
            <span></span>
          </Link>
          <nav id="nav-menu" className={mobilMenu ? 'mobile' : ''}>
            <ul className={styles.nav_container}>
              <li className={pageName === ROUTES.Flowers ? 'selected' : ''}>
                <Link
                  className={styles.nav_link}
                  title={ROUTES.Flowers}
                  href={ROUTES.Flowers}
                  onClick={closeMobilMenu}
                >
                  {ROUTES.Flowers}
                </Link>
              </li>
              <li className={pageName === ROUTES.Ocasions ? 'selected' : ''}>
                <Link
                  className={styles.nav_link}
                  title={ROUTES.Ocasions}
                  href={ROUTES.Ocasions}
                  onClick={closeMobilMenu}
                >
                  {ROUTES.Ocasions}
                </Link>
              </li>
              <li
                className={pageName === ROUTES.FlowersTypes ? 'selected' : ''}
              >
                <Link
                  title={ROUTES.FlowersTypes}
                  href={ROUTES.FlowersTypes}
                  onClick={closeMobilMenu}
                >
                  {ROUTES.FlowersTypes}
                </Link>
              </li>
              <li className={pageName === ROUTES.GiftSets ? 'selected' : ''}>
                <Link
                  title={ROUTES.GiftSets}
                  href={ROUTES.GiftSets}
                  onClick={closeMobilMenu}
                >
                  {ROUTES.GiftSets}
                </Link>
              </li>
              <li className={pageName === 'contactUs' ? 'selected' : ''}></li>

              {token.length > 1 && (
                <li className={styles.logout}>
                  <Link
                    title={ROUTES.Flowers}
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
          {modal ? (
            <Modal
              onModalClose={() => {
                setModal(false)
              }}
            >
              <div>AdminLogHandler</div>
              {/* <AdminLogHandler
                onModalClose={() => {
                  setModal(false)
                }}
              /> */}
            </Modal>
          ) : null}
          {/* <!-- ============ Main Navigation - END ============ --> */}
        </div>
      </div>
      {pageName === 'home' ? (
        <div id="brand">
          <h1 id="logo">
            <img className={styles.logo} src={'#'} alt="" />
          </h1>
          <div className="info">
            <span>Wear your story with Shop</span>
          </div>
        </div>
      ) : (
        <h2 id="page-title">{titleHeader}</h2>
      )}
    </header>
  )
}

export default Header
