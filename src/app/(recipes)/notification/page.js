"use client";

import NotificationCard from "@/components/notificationCard";
import styles from "@/styles/notification.module.css";
import { useEffect, useState } from "react";

export default function Notification() {
  const [notification, setNotification] = useState([]);
  console.log(notification);

  useEffect(() => {
    const allRecipes = async () => {
      try {
        const response = await fetch(`/fetch?number=10`);
        const result = await response.json();
        const sortedData = result.data
          .sort((a, b) => a.readyInMinutes - b.readyInMinutes)
          .map((item) => ({
            ...item,
            viewed: false,
          }));
        localStorage.setItem("notifications", JSON.stringify(sortedData));
        // setNotification(sortedData);
      } catch (error) {
        console.error("Error fetching new recipes:", error);
      }

      const savedNotifications = localStorage.getItem('notifications')
      if(savedNotifications) {
        setNotification(JSON.parse(savedNotifications))
      }
    };

    allRecipes();
  }, []);

  const handleCardClick = (id) => {
    setNotification((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, viewed: true } : item
      )
    );
    localStorage.setItem('notifications', JSON.stringify(notification))
  };

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
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>
    </article>
  );
}
