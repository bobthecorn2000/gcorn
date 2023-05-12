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
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to API endpoint here (using fetch or a library like axios)

    setName("");
    setEmail("");
    setMessage("");
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
          <h1 className={styles.center}>contact the government</h1>
          </div>      
  <form >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
<br></br>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
<br></br>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
 
      </main>
          
          
      )
}

