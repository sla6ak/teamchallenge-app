'use client'

import { FC } from 'react'
import Link from 'next/link'

interface Props {
  scrollIs: number
  pageName?: string
}

const Footer: FC<Props> = ({ scrollIs, pageName }) => {
  return (
    <footer className="dark" id="footer-id">
      <div className="container">
        <div className="row">
          <div className="footer-col col-md-4 col-sm-6">
            <h3 className="focus-title">About Us</h3>
            <p>
              <img
                width="200"
                className="align-center"
                src={'#'}
                alt="THE SALON salon shop"
              />
            </p>
            <p>Wear your story with Salon Shop</p>
          </div>

          <div className="footer-col col-md-4 col-sm-6">
            <h3 className="focus-title">
              <i className="fa fa-clock-o"></i>Working Days
            </h3>
            <dl className="working-days">
              <dt>Monday</dt>
              <dd>10:00 - 17:00</dd>
              <dt>Tuesday</dt>
              <dd>10:00 - 17:00</dd>
              <dt>Wednesday</dt>
              <dd>10:00 - 17:00</dd>
              <dt>Thursday</dt>
              <dd>10:00 - 17:00</dd>
              <dt>Friday</dt>
              <dd>10:00 - 17:00</dd>
              <dt>Saturday</dt>
              <dd>10:00 - 17:00</dd>
              <dt>Sunday</dt>
              <dd>CLOSED</dd>
            </dl>
          </div>

          <div className="footer-col footer-contacts col-md-4 col-sm-12">
            <div className="contact-item">
              <span>THE SALON - Salon Shop, Ukraine, Kiev</span>
            </div>
            <div className="contact-item">
              <span>Phone:</span>
              <strong>
                <Link href="tel:+380966290475">+380966290475</Link>
              </strong>
            </div>
            <div className="contact-item">
              <span>Email:</span>
              <strong>
                <Link href="mailto:slabakxaker@gmail.com">
                  slabakxaker@gmail.com
                </Link>
              </strong>
            </div>
            <div className="contact-item">
              <span>Follow us on:</span>
              <ul className="social-links">
                <li>
                  <Link
                    title="Instagram"
                    href="https://www.instagram.com/viktoriachmenik"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; 2024 - <strong>THE SALON - Salon Shop</strong>
      </div>
      {/* <!-- ============ Contacts Bar - START ============ --> */}
      {scrollIs > 2 && (
        <div id="contacts-bar" className="row">
          <div className="address col-md-6">
            THE SALON - Salon Shop, Ukraine, Kiev
          </div>
          <div className="other col-md-6">
            <span className="contact">
              <i className="fa fa-phone"></i>Phone:{' '}
              <Link href="tel:+380966290475">
                <strong>+380966290475</strong>
              </Link>
            </span>
            <span className="contact">
              <i className="fa fa-envelope"></i>Email:{' '}
              <Link href="mailto:slabakxaker@gmail.com">
                <strong>slabakxaker@gmail.com</strong>
              </Link>
            </span>
          </div>
        </div>
      )}
      {/* <!-- ============ Contacts Bar - END ============ --> */}
    </footer>
  )
}

export default Footer
