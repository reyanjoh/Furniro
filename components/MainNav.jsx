import Link from 'next/link'
import React from 'react'
import styles from './MainNav.module.css'
import Image from 'next/image'

function MainNav() {
  return (
    <nav className={styles.mainNav}>
        <Link href={'/'} className={styles.logoContainer}>
          <Image width={23.33*2} height={18.67*2} src="/logo.png" alt="" />
          <span>Furniro</span>
        </Link>
        <div className={styles.navLinks}>
        <ul className={styles.navUl}>
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
        <ul className={styles.navUl}>
            <li>
                <Link href={'/'}><Image width={23.33} height={18.67} src="/profile.svg" alt="" /></Link>
            </li>
            <li>
                <Link href={'/shop'}><Image width={23.33} height={18.67} src="/search.svg" alt="" /></Link>
            </li>
            <li>
                <Link href={'/about'}><Image width={23.33} height={18.67} src="/wish-list.svg" alt="" /></Link>
            </li>
            <li>
                <Link href={'/contact'}><Image width={23.33} height={18.67} src="/cart.svg" alt="" /></Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default MainNav