import TransationIcon from "@/svg/transationIcon";
import styles from "@/styles/notificationCard.module.css";

export default function NotificationCard() {
  return (
    <div className={styles.card}>
      <p>New Recipe Alert!</p>
      <p>
        Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit
        esse cillum
      </p>
      <p>10 mins ago</p>
      <div className={styles.icon}>
        <TransationIcon />
      </div>
    </div>
  );
}
