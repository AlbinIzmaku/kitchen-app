import styles from '@/styles/socialIcon.module.css'

export default function SocialIcon({children}) {
  return (
    <div className={styles.box}>
      {children}
    </div>
  )
}