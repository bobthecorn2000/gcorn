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
const images = [
  { src: '/city17.jpg', alt: 'Image 1' },
  { src: '/allyway.jpg', alt: 'Image 2' },
  { src: '/shops.jpg', alt: 'Image 3' },
];


export default function city17() {
 const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
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
          <h1 className={styles.center}>Welcome to City 17,</h1>
      <p>A sanctuary owned by Gcorn Industries, where newcomers can find refuge from the chaos of the greater apocalypse and begin a new life under our protection.In City 17, we offer state-of-the-art facilities and a variety of job opportunities for those who are willing to work hard and contribute to our community. Our skilled workforce is always available to provide training and guidance to newcomers, ensuring they have the necessary skills and knowledge to thrive in our society.

But we're not just a place to work and live. Gcorn Industries is committed to making a positive impact on the world around us. Our research and development team is constantly working on new technologies and innovations that will improve the lives of people both inside and outside of City 17.

As a member of the Gcorn family, you'll have access to a range of benefits and services that will make your life easier and more enjoyable. From healthcare and education to entertainment and leisure activities, we've got you covered.

So come join us in City 17, where the future is bright and the opportunities are endless. We look forward to welcoming you to our community.</p>
        </div>       
          <div className={styles.slideshow}>
      <div className={styles.slideWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.activeSlide : ''
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={500}
              objectFit="cover"
                
            />
          </div>
        ))}
      </div>
              <br></br>
      <div className={styles.buttonWrapper} style={{ zIndex: 1 }}>
        <button onClick={goToPreviousSlide} className={styles.button}>
          &lt;
        </button>
        <button onClick={goToNextSlide} className={styles.button}>
          &gt;
        </button>
      </div>
    </div> 
      </main>
          
          
      )
}

