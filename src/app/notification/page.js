import Link from "next/link";
import styles from "@/styles/notification.module.css";
import TransationIcon from "@/svg/transationIcon";
import all from "@/data/all";
import NotificationCard from "@/components/notificationCard";

export default function Notification() {
  return (
    <main className={styles.main}>
      <h4 className={styles.notification}>Notification</h4>
      <div className={styles.link}>
        <Link href="/notification">All</Link>
        <Link href="/">Read</Link>
        <Link href="/">Unread</Link>
      </div>
      <section className={styles.section}>
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
      </section>
    </main>
  );
}
