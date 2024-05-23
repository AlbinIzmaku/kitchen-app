import Link from "next/link";
import styles from "@/styles/notification.module.css";

export default function NotificationLayout({ children }) {
  return (
    <section>
      <h4 className={styles.notification}>Notification</h4>
      <div className={styles.link}>
        <Link href="/notification">All</Link>
        <Link href="/">Read</Link>
        <Link href="/">Unread</Link>
      </div>
      {children}
    </section>
  );
}
