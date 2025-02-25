import React from 'react'
import logo from '../assets/terra_tech_logo.png'
import Image from 'next/image';
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <Image src={logo} alt="Logo" width={150}/>
      <p className={styles.logo_title}>TERRATECH</p>
    </div>
  )
}

export default Logo
