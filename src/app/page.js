"use client";

import Image from "next/image";
import backgroundImage from "/public/backgroundImage.png";
import hatImage from "/public/hatImage.png";
import styles from "@/styles/page.module.css";
import Button from "@/components/button";
import Link from "next/link";
import { isEmbeddedBrowser } from "@/utils/dectectEmbeddedBrowser";
import { useEffect, useState } from "react";

export default function Home() {
  const [isEmbedded, setIsEmbedded] = useState(false);
  useEffect(() => {
    if (isEmbeddedBrowser()) {
      setIsEmbedded(true);
    }
  }, []);
  if (isEmbedded) {
    <p>
      Please open this link in a standard browser (Chrome, Safari, Firefox,
      Edge) for authentication.
    </p>;
  }

  return (
    <main className={styles.main}>
      {isEmbedded ? (
        <div className={styles.embeddedMessage}>
          <p>
            Please open this link in a standard browser (Chrome, Safari,
            Firefox, Edge) for authentication.
          </p>
        </div>
      ) : (
        <>
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
            <Button>
              <Link href="/sign-in">Start Cooking</Link>
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
