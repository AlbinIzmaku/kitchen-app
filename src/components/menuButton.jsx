import styles from '@/styles/menuButton.module.css'

export default function MenuButton({item}) {
  return (
    <button className={styles.button}>{item}</button>
  )
}