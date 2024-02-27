import styles from "./qrCode.module.css";
import qrCode from "../../recources/qr-code-component/images/image-qr-code.png";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit700 = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const outfit400 = Outfit({
  weight: "400",
  subsets: ["latin"],
});

export default function QrCodeComponent() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.qrCodeMain}>
        <Image alt="QR code image" src={qrCode} />
        <p className={`${styles.title} ${outfit700.className}`}>Improve your front-end skills by building projects</p>
        <p className={`${styles.text} ${outfit400.className}`}>
          Scan the QR code to visit Frontend Mentor and take you coding skills to the next level
        </p>
      </div>
    </div>
  );
}
