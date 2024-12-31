import styles from "@/css/Profile.module.css";

export default function Profile() {
  return (
    <div>
      <div className={styles.profileImage}>
        <img src="/image/profile_2.png" alt="" />
      </div>
      <div className={styles.profileName}>miku</div>

      <div className={styles.socialLinks}>
        <a href="https://x.com/baroqueengine" target="_blank" rel="noreferrer">
          X(Twitter)
        </a>
        &nbsp;/&nbsp;
        <a href="https://github.com/BaroqueEngine" target="_blank" rel="noreferrer">
          GitHub
        </a>
        &nbsp;/&nbsp;
        <a href="https://zenn.dev/baroqueengine" target="_blank" rel="noreferrer">
          Zenn
        </a>
        &nbsp;/&nbsp;
        <a href="https://atcoder.jp/users/baroqueengine" target="_blank" rel="noreferrer">
          AtCoder
        </a>
      </div>
    </div>
  );
}
