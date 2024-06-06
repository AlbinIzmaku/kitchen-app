import BookMarkIcon from "@/svg/bookMarkIcon";
import HomeIcon from "@/svg/homeIcon";
import NotificationIcon from "@/svg/notificationIcon";
import PlusIcon from "@/svg/plusIcon";
import ProfileIcon from "@/svg/profileIcon";
import styles from "@/styles/nav.module.css";
import Save from "@/svg/save";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <PlusIcon />
        <div>
          <HomeIcon />
          <Save />
        </div>
        <div>
          <NotificationIcon />
          <ProfileIcon />
        </div>
      </div>
    </nav>
  );
}
