import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

function MainFooter() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerCompanyNameContainer}>
          <Link className={styles.footerCompanyName} href={'/'}>Funiro.</Link>

          <span className={styles.address}>400 University Drive Suite 200 Coral Gables, FL 33134 USA</span>
        </div>
        <nav className={styles.footerNav}>
          <div>
            <span>
              Links
            </span>
            <ul>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/shop'}>Shop</Link>
              </li>
              <li>
                <Link href={'/about'}>About</Link>
              </li>
              <li>
                <Link href={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <span>
              Help
            </span>
            <ul>
              <li>
                <Link href={'/payment-options'}>Payment Options</Link>
              </li>
              <li>
                <Link href={'/returns'}>Returns</Link>
              </li>
              <li>
                <Link href={'/privacy-policies'}>Privacy Policies</Link>
              </li>
            </ul>
          
          </div>
          <div>
            <span>
              Newsletter
            </span>

            <form className={styles.newLetter}>
              <input className={styles.newLetterInput} placeholder='Enter Your Email Address' type="text" name="" id="" />
              <input className={styles.subscribe} type="submit" value="SUBSCRIBE"/>
            </form>
          
          </div>
        </nav>
      </div>
      <div className={styles.copyRights}>2023 furniro. All rights reserved</div>
    </footer>
  )
}

export default MainFooter