import { css } from "@emotion/css";
import Link from "next/link";

const MoreButton = () => {
  return (
    <Link href="/tags/all" className={container}>
      <span>もっと見る</span>
    </Link>
  );
};

export default MoreButton;

const container = css`
  display: block;
  width: min(calc(240 / var(--unit)), 240px);
  line-height: min(calc(60 / var(--unit)), 60px);
  margin-top: min(calc(60 / var(--unit)), 60px);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: min(calc(20 / var(--unit)), 20px);
  letter-spacing: min(calc(2 / var(--unit)), 2px);
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: min(calc(10 / var(--unit)), 10px);

  :hover {
    background-color: #222;
  }

  @media (max-width: 767px) {
    width: calc(200 / var(--unitSp));
    font-size: calc(16 / var(--unitSp));
    line-height: calc(32 / var(--unitSp));
  }
`;
