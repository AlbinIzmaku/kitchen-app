import Link from "next/link";
import all from "@/data/all";
import NotificationCard from "@/components/notificationCard";
import styles from "@/styles/notification.module.css";

export default function Notification() {
  return (
    <section className={styles.main}>
      <h4 className={styles.notification}>Notification</h4>

      <div className={styles.link}>
        <Link href="/notification">All</Link>
        <Link href="/">Read</Link>
        <Link href="/">Unread</Link>
      </div>
      
      <article className={styles.article}>
        <div className={styles.cards}>
          <p className={styles.date}>Today</p>
          {all.map((item) => (
            <NotificationCard key={item.id} />
          ))}
        </div>
        <div className={styles.cards}>
          <p className={styles.date}>Yesterday</p>
          {all.map((item) => (
            <NotificationCard key={item.id} />
          ))}
        </div>
      </article>
    </section>
  );
}
