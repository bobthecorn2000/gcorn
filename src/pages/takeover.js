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
          <h1 className={styles.center}>We arrived on Earth with the best of intentions.</h1>
      <p>

 Our home planet had been ravaged by war and resource depletion, and we had been forced to seek out new worlds to ensure the survival of our species. When we detected signs of intelligent life on Earth, we saw an opportunity for mutually beneficial trade and cooperation.

We offered advanced technology and resources to the humans, in exchange for access to their abundant natural resources. And at first, they welcomed us with open arms.

But we quickly realized that the humans were not prepared for the challenges of the galactic community. They were reckless and irresponsible, exploiting their planet's resources without regard for the consequences. Their wars and conflicts threatened the stability of the entire planet.

We knew that something had to be done.

So we began to take a more active role in the affairs of the planet. We established sanctuary cities where humans could live under our protection, but only if they agreed to certain conditions. We built massive structures across the planet, transforming entire cities into sprawling industrial complexes.

We knew that some humans would resist our efforts to bring order and stability to the planet. But we also knew that our actions were necessary for the greater good. We had a responsibility to ensure that the planet's resources were managed responsibly, and that conflicts were resolved peacefully.

Yes, there were casualties. Yes, there were those who suffered as a result of our actions. But we firmly believe that the end justified the means. The planet is now more stable and prosperous than ever before, and the humans who have embraced our leadership have seen their standard of living improve dramatically.

We know that some will continue to resist us, but we are confident in our ability to bring them into the fold. We are committed to building a better future for all species across the galaxy, and we will stop at nothing to ensure that our mission is accomplished.</p>
        </div>       
  
      </main>
          
          
      )
}

