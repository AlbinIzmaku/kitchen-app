"use client";

import Link from "next/link";
import styles from "@/styles/notification.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className={styles.link}>
      <Link
        href="/notification"
        className={pathname === "/notification" ? styles.active : ""}
      >
        All
      </Link>
      <Link
        href="/notification/read"
        className={pathname === "/notification/read" ? styles.active : ""}
      >
        Read
      </Link>
      <Link
        href="/notification/unread"
        className={pathname === "/notification/unread" ? styles.active : ""}
      >
        Unread
      </Link>
    </div>
  );
}
