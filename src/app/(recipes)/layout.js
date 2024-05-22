import Nav from "@/components/nav";
import styles from '@/app/(recipes)/second.module.css'

export default function RecipesLayout({ children }) {
  return (
    <main
      className={styles.main}
    >
      {children}
      <Nav />
    </main>
  );
}
