import styles from '@/styles/input.module.css'

export default function Input({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} className={styles.input} />;
}
