import Image from "next/image";
import backgroundImage from "/public/backgroundImage.png";
import hatImage from "/public/hatImage.png";
import styles from "@/styles/page.module.css";
import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className={styles.chefHat}>
        <Image src={hatImage} alt="Chef Hat " />
        <h4>100K+ Premium Recipe</h4>
      </div>
      <div className={styles.getCooking}>
        <h1>Get Cooking</h1>
        <p>Simple way to find Tasty recipe</p>
      </div>
      <div className={styles.buttonClass}>
        <Button><Link href='/sign-in'>Start Cooking</Link></Button>
      </div>
    </main>
  );
}
