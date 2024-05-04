'use client'

import React, { FC, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { scrollStateAction } from '@/redux/slices/scrollView'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

type RootState = {
  mobilMenu: boolean
}

interface Props {
  children: any
  title: string
  keywords?: string
  description?: string
  pageName?: string
  titleHeader?: string
}

const Layout: FC<Props> = ({
  title,
  keywords,
  description,
  children,
  pageName,
  titleHeader
}) => {
  const [scrollIs, setScrollIs] = useState<number>(0)
  const [currentScrollHeightIs, setCurrentScrollHeightIs] =
    useState<number>(100)
  const dispatch = useDispatch()
  const { mobilMenu } = useSelector((state: RootState) => state)
  const bodyRef = useRef<any>(null)

  const handleScroll = (event: any) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target
    dispatch(scrollStateAction({ scrollTop, scrollHeight, clientHeight }))
    const currentScrollHeight = scrollHeight - clientHeight
    setScrollIs(scrollTop)
    setCurrentScrollHeightIs(currentScrollHeight - scrollTop)
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {description?.length ? (
          <meta name="description" content={description} />
        ) : null}
        {keywords?.length ? <meta name="keywords" content={keywords} /> : null}
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${pageName} ${scrollIs < 50 ? 'scroll_body' : 'scroll_body sticky'
          } ${mobilMenu && 'open'}`}
        ref={bodyRef}
        onScroll={handleScroll}
      >
        <div className="wrapper">
          <Header pageName={pageName} titleHeader={titleHeader} />
          <main className="main-layout">{children}</main>
          <Footer scrollIs={currentScrollHeightIs} pageName={pageName} />
        </div>
      </div>
    </>
  )
}

export default Layout
