"use client"
import React, { useState } from 'react'
import { NextResponse } from 'next/server';
import ContactForm from '../components/ContactForm';
import styles from './page.module.css'

const Page = () => {
  
  return (
    <div className={styles.pageContainer}>
        <h1 className={styles.title}>Contact Us</h1>
        <ContactForm/>
    </div>
  )
}

export default Page
