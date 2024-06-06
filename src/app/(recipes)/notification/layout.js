import Link from "next/link";
import styles from "@/styles/notification.module.css";
import Navigation from "./navigation";

export default function NotificationLayout({ children }) {
  return (
    <section>
      <h4 className={styles.notification}>Notification</h4>
      <Navigation />
      {children}
    </section>
  );
}
