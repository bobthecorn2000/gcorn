import { useState, useEffect } from 'react';
import Image from 'next/image'
import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gcorn Industries',
  description: 'Here to take your heart',
}
import styles from '@/app/page.module.css'



export default function city17() {
 
  return (
     
    <main className={styles.main}>
      

      <div className={styles.center}>
     <a href="/">    
        <Image
          className={styles.logo}
          src="/gcorn_color.png"
          alt="gcorn logo"
          width={180}
          height={180}
          priority
        /></a> 
          <h1>Gcorn Industries</h1>
         
      </div>

      <div className={styles.grid}>
          <a
          href="/"
          className={styles.card}
          
          rel="noopener noreferrer"
        >
            
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Return to Home </p>
        </a>
          
        <a
          href="/city17"
          className={styles.card}
          
          rel="noopener noreferrer"
        >
            
          <h2>
            City 17 <span>-&gt;</span>
          </h2>
          <p>Welcome to City 17, </p>
        </a>

        <a
          href="/about"
          className={styles.card}
          
          rel="noopener noreferrer"
        >
          <h2>
            Who we are<span>-&gt;</span>
          </h2>
          <p>Learn about our history</p>
        </a>

        <a
          href="/takeover"
          className={styles.card}
          
          rel="noopener noreferrer"
        >
          <h2>
            The Takeover <span>-&gt;</span>
          </h2>
          <p>How did we get here.</p>
        </a>

        <a
          href="/contact"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>
            Contact the Gcorn Government.
          </p>
        </a>
      </div>
        <div>
          <h1 className={styles.center}>Welcome to Gcorn Industries,</h1>
      <p>

 a pioneering leader in the advancement of alien technology and interplanetary trade. We are proud to be at the forefront of innovation and discovery, working to create a brighter future for all species across the galaxy.

Our mission is to provide cutting-edge solutions to the most complex challenges facing our clients, from interstellar travel to sustainable energy and beyond. With a team of the brightest minds in the galaxy, we are dedicated to pushing the boundaries of what is possible, driving progress and change across the universe.

At Gcorn Industries, we believe that our success is measured not only in profits, but in the positive impact we have on the world around us. That's why we are committed to ethical business practices, environmental stewardship, and social responsibility, ensuring that our actions always align with our values.

We are proud to be a beacon of hope and progress in a universe that can often seem dark and uncertain. Join us on this incredible journey, as we continue to push the limits of what we can achieve and build a better future for all.</p>
        </div>       
  
      </main>
          
          
      )
}

