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
      className={
        pageName === ROUTES.Flowers.link ? 'full-screen overlayed' : ''
      }
    >
      <div className="top-header">
        <div className="container">
          {pageName !== ROUTES.Flowers.link && (
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
              <li
                className={pageName === ROUTES.Flowers.link ? 'selected' : ''}
              >
                <Link
                  className={styles.nav_link}
                  title={ROUTES.Flowers.title}
                  href="/"
                  onClick={closeMobilMenu}
                >
                  {ROUTES.Flowers.title}
                </Link>
              </li>
              <li
                className={pageName === ROUTES.Ocasions.link ? 'selected' : ''}
              >
                <Link
                  className={styles.nav_link}
                  title={ROUTES.Ocasions.title}
                  href="ocasions"
                  onClick={closeMobilMenu}
                >
                  {ROUTES.Ocasions.title}
                </Link>
              </li>
              <li
                className={
                  pageName === ROUTES.FlowersTypes.link ? 'selected' : ''
                }
              >
                <Link
                  title={ROUTES.FlowersTypes.title}
                  href="flowerstypes"
                  onClick={closeMobilMenu}
                >
                  {ROUTES.FlowersTypes.title}
                </Link>
              </li>
              <li
                className={pageName === ROUTES.GiftSets.link ? 'selected' : ''}
              >
                <Link
                  title={ROUTES.GiftSets.title}
                  href="giftsets"
                  onClick={closeMobilMenu}
                >
                  {ROUTES.GiftSets.title}
                </Link>
              </li>
              <li className={pageName === 'contactUs' ? 'selected' : ''}></li>

              {token.length > 1 && (
                <li className={styles.logout}>
                  <Link
                    title={ROUTES.Flowers.title}
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
