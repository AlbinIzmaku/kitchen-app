import Image from "next/image";
import tomato from "/public/tomato.png";
import styles from "@/styles/ingrident.module.css";

export default function Ingrident({ vegetable, quantity }) {
  return (
    <div className={styles.ingrident}>
      <div className={styles.vegetable}>
        <Image src={tomato} alt="Tomato" />
        <h5>{vegetable}</h5>
      </div>

      <h6>{quantity}g</h6>
    </div>
  );
}
