import Image from "next/image";
import backgroundImage from "/public/background.png";
import heat from "/public/heat.png";
import rightArrow from "/public/rightArrow.svg";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={backgroundImage}
        alt="Background"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className={styles.heatContainer}>
        <Image src={heat} alt="Chief heat" />
        <h4>100K+ Premium Recipe</h4>
      </div>
      <div className={styles.getCooking}>
        <h1 className={styles.h1}>Get Cooking</h1>
        <p>Simple way to find Tasty Recipe</p>
      </div>
      <div className={styles.button}>
        <buttton >Start Cooking</buttton>
        <Image src={rightArrow} alt="Right" />
      </div>
    </main>
  );
}
