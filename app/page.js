
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div>
          
        </div>
        <div>
          <div className={styles.heroCTA}>
            <h2>New Arrival</h2>
            <h1>Discover Our <br/>New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <Link className={styles.heroCTABtn} href={'/shop'}>BUY NOW</Link>
          </div>
        </div>
      </div>

      
    </main>
  );
}
