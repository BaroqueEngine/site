import { css } from "@emotion/css";

const Footer = () => {
  return (
    <footer className={footer}>
      <p>miku / BAROQUE ENGINE</p>
    </footer>
  );
};

export default Footer;

const footer = css`
  border-top: 1px solid #666;
  text-align: center;

  padding: 20px 0;

  @media (max-width: 767px) {
    padding: calc(15 / var(--unitSp)) 0;
  }
`;