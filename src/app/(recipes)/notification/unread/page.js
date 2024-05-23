import Link from "next/link";
import all from "@/data/all";
import NotificationCard from "@/components/notificationCard";
import styles from "@/styles/notification.module.css";

export default function Unread() {
  return (
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
  );
}
