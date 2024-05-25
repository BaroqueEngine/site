import { css } from "@emotion/css";

const Profile = () => {
  return (
    <div>
      <div className={profileImage}>
        <img src="/image/profile_2.png" alt="" />
      </div>
      <div className={profileName}>miku</div>

      <div className={socialLinks}>
        <a href="https://x.com/baroqueengine" target="_blank" rel="noreferrer">X(Twitter)</a>&nbsp;/&nbsp;
        <a href="https://github.com/BaroqueEngine" target="_blank" rel="noreferrer">GitHub</a>&nbsp;/&nbsp;
        <a href="https://zenn.dev/baroqueengine" target="_blank" rel="noreferrer">Zenn</a>&nbsp;/&nbsp;
        <a href="https://atcoder.jp/users/baroqueengine" target="_blank" rel="noreferrer">AtCoder</a>
      </div>

      <div className={skills}>
        <h3 className={skillTitle}>スキル - 言語</h3>
        <div className={skillDetail}>
          <p className={skillItems}>HTML/CSS, JavaScript, TypeScript, PHP</p>
          <p>Web制作やブラウザでのグラフィックス表現が得意なのでメインで触っている言語。</p>
        </div>
        <div className={skillDetail}>
          <p className={skillItems}>Python</p>
          <p>競技プログラミング・ローカル用にさくっとしたスクリプトを作る場合に触る。</p>
        </div>
        <div className={skillDetail}>
          <p className={skillItems}>Go, Rust</p>
          <p>画像処理で利用する場合がある。</p>
        </div>
        <div className={skillDetail}>
          <p className={skillItems}>C/C++, C#, Ruby</p>
          <p>昔は触っていたが、今は書かなくなった。</p>
        </div>
        <h3 className={skillTitle}>スキル - ライブラリ</h3>
        <div className={skillDetail}>
          <p className={skillItems}>React, Vue, jQuery</p>
          <p>フロントの組み立ては(Vite +)React or Vue。Vanillaなサイトの場合、セレクタ操作用にjQueryを使う事が多い。</p>
        </div>
        <div className={skillDetail}>
          <p className={skillItems}>p5.js, pixi.js, paper.js, three.js, Phaser</p>
          <p>JSで利用している主なグラフィックス系ライブラリ。</p>
        </div>
        <div className={skillDetail}>
        <p className={skillItems}>Blender, TouchDesigner, PIL, OpenCV</p>
          <p>ブラウザ以外で利用するグラフィックス系ライブラリ。</p>
        </div>
        <div className={skillDetail}>
          <p className={skillItems}>Photoshop, Illustrator, XD, Figma</p>
          <p>簡単な加工、デザイナーさんが用意したデータから切り出し用。</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const skills = css`
  margin-top: min(calc(60 / var(--unit)), 60px);
`;

const skillTitle = css`
  margin-top: min(calc(60 / var(--unit)), 60px);
  font-size: min(calc(24 / var(--unit)), 24px);

  @media (max-width: 767px) {
    font-size: calc(18 / var(--unitSp));
  }
`;

const skillItems = css`
  font-weight: bold;
  font-size: min(calc(18 / var(--unit)), 18px);
  line-height: min(calc(30 / var(--unit)), 30px);

  @media (max-width: 767px) {
    font-size: calc(14 / var(--unitSp));
  }
`;

const socialLinks = css`
  display: flex;
  justify-content: center;
  margin-top: min(calc(20 / var(--unit)), 20px);
  margin-bottom: min(calc(30 / var(--unit)), 30px);
  gap: min(calc(5 / var(--unit)), 5px);
`;

const skillDetail = css`
  padding-left: min(calc(10 / var(--unit)), 10px);
  padding-right: min(calc(10 / var(--unit)), 10px);
  padding-top: min(calc(10 / var(--unit)), 10px);
  margin-bottom: min(calc(15 / var(--unit)), 15px);
`;

const profileName = css`
  margin-top: min(calc(20 / var(--unit)), 20px);
  font-size: min(calc(40 / var(--unit)), 40px);
  font-weight: 500;
  text-align: center;
  letter-spacing: min(calc(1 / var(--unit)), 1px);
`;

const profileImage = css`
  max-width: min(calc(200 / var(--unit)), 200px);
  margin-left: auto;
  margin-right: auto;

  img {
    border-radius: 9999px;
    border: min(calc(4 / var(--unit)), 4px) solid #aaa;
  }
`;
