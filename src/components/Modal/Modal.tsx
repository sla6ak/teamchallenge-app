'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from '../../styles/Modal.module.css'
import { FC } from 'react'

interface Props {
  children: any
  onModalClose: () => void
}

const Modal: FC<Props> = ({ onModalClose, children }: any) => {
  const [returnPortal, setReturnPortal] = useState(false)
  const ref = useRef<Element | null>(null)
  const mouseDownClose = (e: { target: any; currentTarget: any }) => {
    if (e.target === e.currentTarget) {
      onModalClose()
    }
  }

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#modal')
    setReturnPortal(!!ref.current)
  }, [])

  useEffect(() => {
    const keyDownClose = (e: { code: string }) => {
      if (e.code === 'Escape') {
        onModalClose()
      }
    }

    window.addEventListener('keydown', keyDownClose)
    return () => {
      window.removeEventListener('keydown', keyDownClose)
    }
  }, [onModalClose])

  return returnPortal
    ? createPortal(
        <div onClick={mouseDownClose} className={styles.modal_overlay}>
          <div className={styles.modal_window}>
            <div className={styles.close_btn} onClick={onModalClose}>
              <img width={'30px'} height={'30px'} src={'#'} alt="" />
            </div>
            {children}
          </div>
        </div>,
        ref.current!
      )
    : null
}

export default Modal
