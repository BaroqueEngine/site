import styles from "@/css/IndexVideo.module.css";

export default function IndexVideo() {
  return (
    <div className={styles.container}>
      <video src="/image/index.mp4" autoPlay={true} muted={true} loop={true} />
    </div>
  );
}
