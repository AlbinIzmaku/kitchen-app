"use client";

import Link from "next/link";
import all from "@/data/all";
import NotificationCard from "@/components/notificationCard";
import styles from "@/styles/notification.module.css";
import { useEffect, useState } from "react";

export default function UnRead() {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const savedNotifications = localStorage.getItem("notifications");
    if (savedNotifications) {
      const parsedNotifications = JSON.parse(savedNotifications);
      const notViewedNotifications = parsedNotifications.filter(
        (item) => item.viewed === false
      );
      setNotification(notViewedNotifications);
    }
  }, []);

  return (
    <article className={styles.article}>
      <div className={styles.cards}>
        <p className={styles.date}>Today</p>
        {notification.map((item) => (
          <NotificationCard
            key={item.id}
            time={item.readyInMinutes}
            title={item.title}
            viewed={item.viewed}
          />
        ))}
      </div>
    </article>
  );
}
