"use client";

import Link from "next/link";
import all from "@/data/all";
import NotificationCard from "@/components/notificationCard";
import styles from "@/styles/notification.module.css";
import { useEffect, useState } from "react";

export default function Read() {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const savedNotifications = localStorage.getItem("notifications");
    if (savedNotifications) {
      const parsedNotifications = JSON.parse(savedNotifications);
      const viewedNotifications = parsedNotifications.filter(
        (item) => item.viewed
      );
      setNotification(viewedNotifications);
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
