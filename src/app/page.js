import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      

      <div className={styles.center}>
          
        <Image
          className={styles.logo}
          src="/gcorn_color.png"
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
          <h1>Gcorn Industries</h1>
      </div>

      <div className={styles.grid}>
        <Link
          href="/city17"
          className={styles.card}
          
          rel="noopener noreferrer"
        >
            
          <h2>
            City 17 <span>-&gt;</span>
          </h2>
          <p>Welcome to City 17, </p>
        </Link>

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
    </main>
  )
}
