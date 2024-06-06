import styles from '@/styles/social-icon.module.css'

export default function SocialIcon({children}) {
  return (
    <div className={styles.box}>
      {children}
    </div>
  )
}