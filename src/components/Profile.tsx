import { css } from "@emotion/css";
import LinkImage from "atoms/LinkImage";
import GapContainer from "molecules/GapContainer";

const Profile = () => {
  return (
    <section className={container} id="profile">
      <div className={clip}></div>
      <div className={workContainer}>
        <div className={profileTitle}>
          <span className={worksTitleEn}>PROFILE</span>
        </div>
        <div className={profileImage}>
          <img src="/image/profile_2.png" alt="" />
        </div>
        <div className={profileName}>miku</div>

        <div className={social}>
          <GapContainer gap={15}>
            <LinkImage className={socialLink} href="https://twitter.com/baroqueengine" src="/image/profile/twitter.png" alt="Twitter" isBlank={true} />
            <LinkImage className={socialLink} href="https://github.com/BaroqueEngine" src="/image/profile/github.png" alt="GitHub" isBlank={true} />
            <LinkImage className={socialLink} href="https://zenn.dev/baroqueengine" src="/image/profile/zenn.png" alt="Zenn" isBlank={true} />
          </GapContainer>
        </div>

        <div className={skillTitle}>My Skills - Languages</div>
        <div className={skillDetail}>
          <ul className={skillList2}>
            <li className={skillListItem}>
              <div className={skillListLang}>HTML/CSS</div>
              <svg className={skillListItemSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 40">
                <rect width="100%" height="100%" stroke="none" />
                <path d="M 0 0 L 600 0 Q 605 20 600 40 Q 595 60 600 80 Q 605 100 600 120 L 0 120 Z" stroke="none" />
              </svg>
            </li>
            <li className={skillListItem}>
              <div className={skillListLang}>JavaScript</div>
              <svg className={skillListItemSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 40">
                <rect width="100%" height="100%" stroke="none" />
                <path d="M 0 0 L 700 0 Q 705 20 700 40 Q 695 60 700 80 Q 705 100 700 120 L 0 120 Z" stroke="none" />
              </svg>
            </li>
            <li className={skillListItem}>
              <div className={skillListLang}>TypeScript</div>
              <svg className={skillListItemSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 40">
                <rect width="100%" height="100%" stroke="none" />
                <path d="M 0 0 L 800 0 Q 805 20 800 40 Q 795 60 800 80 Q 805 100 800 120 L 0 120 Z" stroke="none" />
              </svg>
            </li>
            <li className={skillListItem}>
              <div className={skillListLang}>Python</div>
              <svg className={skillListItemSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 40">
                <rect width="100%" height="100%" stroke="none" />
                <path d="M 0 0 L 600 0 Q 605 20 600 40 Q 595 60 600 80 Q 605 100 600 120 L 0 120 Z" stroke="none" />
              </svg>
            </li>
            <li className={skillListItem}>
              <div className={skillListLang}>Go</div>
              <svg className={skillListItemSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 40">
                <rect width="100%" height="100%" stroke="none" />
                <path d="M 0 0 L 300 0 Q 305 20 300 40 Q 295 60 300 80 Q 305 100 300 120 L 0 120 Z" stroke="none" />
              </svg>
            </li>
            <li className={skillListItem}>
              <div className={skillListLang}>PHP</div>
              <svg className={skillListItemSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 40">
                <rect width="100%" height="100%" stroke="none" />
                <path d="M 0 0 L 400 0 Q 405 20 400 40 Q 395 60 400 80 Q 405 100 400 120 L 0 120 Z" stroke="none" />
              </svg>
            </li>
            <li className={skillListItem}>
              <div className={skillListLang}>C++</div>
              <svg className={skillListItemSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 40">
                <rect width="100%" height="100%" stroke="none" />
                <path d="M 0 0 L 200 0 Q 205 20 200 40 Q 195 60 200 80 Q 205 100 200 120 L 0 120 Z" stroke="none" />
              </svg>
            </li>
          </ul>
        </div>

        <div className={skillTitle}>My Skills - Libraries</div>
        <div className={skillDetail}>
          <ul className={skillList}>
            <li>React</li>
            <li>p5.js</li>
            <li>Blender</li>
            <li>pixi.js</li>
            <li>paper.js</li>
            <li>three.js</li>
            <li>Phaser</li>
            <li>TouchDesigner</li>
            <li>numpy</li>
            <li>PIL</li>
            <li>OpenCV</li>
            <li>Photoshop</li>
            <li>After Effects</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;

const social = css`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 100px;
`;

const socialLink = css`
  @media (max-width: 400px) {
    width: 80px;
  }
`;

const skillListLang = css`
  padding-right: 10px;
  min-width: min(20vw, 180px);
  font-size: min(5vw, 40px);
`;

const skillListItemSvg = css`
  width: 100%;

  path {
    line-height: 1;
    fill: #f7383f;
    animation: wave linear 4s infinite;
  }

  @keyframes wave {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -80px);
    }
  }
`;

const skillListItem = css`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const clip = css`
  width: 100%;
  height: 80px;
  background-color: #31b8c0;
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 0%);
  transform: translate(0, -1px);
`;

const skillDetail = css`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;

const container = css`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 120px;
  scroll-margin-top: -110px;
`;

const worksTitleEn = css`
  color: #f7383f;
`;

const skillTitle = css`
  margin-top: 40px;
  padding: 10px;
  font-family: "Tungsten";
  font-size: 60px;
  font-weight: 500;
  color: #fff;
`;

const skillList2 = css`
  display: flex;
  flex-direction: column;
  font-family: "Tungsten";
  font-size: 40px;
  font-weight: 500;
  flex-wrap: wrap;
`;

const skillList = css`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  font-family: "Tungsten";
  font-size: 40px;
  font-weight: 500;
  flex-wrap: wrap;

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    font-size: min(9vw, 40px);
  }
`;

const profileName = css`
  margin-top: 20px;
  font-family: "Tungsten";
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.2rem;
`;

const profileTitle = css`
  font-family: "Tungsten";
  font-size: min(20vw, 100px);
  font-weight: 500;
`;

const workContainer = css`
  max-width: 1056px;
  margin-left: auto;
  margin-right: auto;
  margin-top: min(10vw, 100px);
  padding-left: 2%;
  padding-right: 2%;
`;

const profileImage = css`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;

  img {
    border-radius: 9999px;
    border: 4px solid #aaa;
  }
`;
