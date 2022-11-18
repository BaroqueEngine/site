import { css } from "@emotion/css";

export default function IndexVideo() {
  return (
    <div className={container}>
      <video src="/image/index.mp4" autoPlay={true} muted={true} loop={true} />
    </div>
  );
}

const container = css`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
  }

  @media (max-width: 870px) {
    display: none;
  }
`;
