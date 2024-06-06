import Nav from "@/components/nav";
import styles from "@/app/(recipes)/second.module.css";
import { SessionProvider } from "next-auth/react";

export default function RecipesLayout({ children }) {
  return (
    <main className={styles.main}>
      <SessionProvider>{children}</SessionProvider>

      <Nav />
    </main>
  );
}
