import TransationIcon from "@/svg/transationIcon";
import styles from "@/styles/notificationCard.module.css";
import Read from "@/svg/read";

export default function NotificationCard({ id, title, time, viewed, onClick }) {
  return (
    <div
      className={styles.card}
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <p>New Recipe Alert!</p>
      <p>{title}</p>
      <p>{time} mins ago</p>
      <div className={styles.icon}>
        {viewed ? <Read /> : <TransationIcon />}

      </div>
    </div>
  );
}
