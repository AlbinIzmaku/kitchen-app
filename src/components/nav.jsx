import BookMarkIcon from "@/svg/bookMarkIcon";
import HomeIcon from "@/svg/homeIcon";
import NotificationIcon from "@/svg/notificationIcon";
import PlusIcon from "@/svg/plusIcon";
import ProfileIcon from "@/svg/profileIcon";
import styles from "@/styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <PlusIcon />
      <div>
        <HomeIcon />
        <BookMarkIcon />
      </div>
      <div>
        <NotificationIcon />
        <ProfileIcon />
      </div>
    </nav>
  );
}
