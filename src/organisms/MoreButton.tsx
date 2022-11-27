import { css } from "@emotion/css";
import Link from "next/link";

const MoreButton = () => {
  return (
    <Link href="/tags/all" className={container}>
      <span>MORE</span>
      <span className={icon}>&gt;</span>
    </Link>
  );
};

export default MoreButton;

const container = css`
  display: block;
  width: 200px;
  height: 60px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background: #000;
  text-align: center;
  line-height: 60px;
  position: relative;
  font-family: "Tungsten";
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.1rem;
  text-decoration: none;

  span {
    display: inline-block;
    transition: all 0.25s;
  }

  :hover {
    border: 1px solid #aaa;
  }

  :hover span:first-child {
    transform: translate(-10px, 0);
  }

  :hover span:last-child {
    opacity: 1;
  }
`;

const icon = css`
  display: inline-block;
  position: absolute;
  left: 120px;
  opacity: 0;
`;
