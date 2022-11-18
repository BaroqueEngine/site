import { css } from "@emotion/css";

const Contact = () => {
  return (
    <section className={container}>
      <a className={`${item} ${itemTwitter}`} href="https://twitter.com/baroqueengine">
        Twitter
      </a>
      <a className={`${item} ${itemGithub}`} href="https://github.com/BaroqueEngine/">
        GitHub
      </a>
      <a className={`${item} ${itemZenn}`} href="https://zenn.dev/baroqueengine">
        Zenn
      </a>
    </section>
  );
};

export default Contact;

const container = css`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  height: 30vw;
  max-height: 400px;

  @media (max-width: 700px) {
    display: block;
    height: auto;
    margin-bottom: 30px;
  }
`;

const item = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: "Tungsten";
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 0.2rem;

  @media (max-width: 700px) {
    margin-bottom: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const itemTwitter = css`
  width: 37%;
  background: #161616;
  transition: all 0.2s;

  :hover {
    background: #003eea;
  }

  :before {
    position: absolute;
    left: 0px;
    top: -1px;
    content: "";
    width: 100px;
    height: 100%;
    background: #161616;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%);
  }

  :after {
    transition: all 0.2s;
    position: absolute;
    right: -1px;
    top: 0;
    content: "";
    width: 100px;
    height: 100%;
    background: #161616;
    clip-path: polygon(100% 0%, 100% 0%, 0% 100%, 100% 100%);
  }

  @media (max-width: 700px) {
    width: 100%;

    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    background: #003eea;

    :before {
      display: none;
    }

    :after {
      display: none;
    }
  }
`;

const itemGithub = css`
  width: 26%;
  z-index: 3;
  background: #161616;
  transition: all 0.2s;

  :before {
    transition: all 0.2s;
    position: absolute;
    left: -99px;
    top: 0;
    content: "";
    width: 100px;
    height: 100%;
    clip-path: polygon(100% 0%, 0% 100%, 100% 100%, 100% 0%);
  }

  :after {
    transition: all 0.2s;
    position: absolute;
    right: -99px;
    top: -1px;
    content: "";
    width: 100px;
    height: 100%;
    background: #161616;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 0%);
  }

  :hover {
    background: #2833a3;
  }
  :hover:before {
    background: #2833a3;
  }
  :hover:after {
    background: #2833a3;
  }

  @media (max-width: 700px) {
    width: 100%;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    background: #2833a3;

    :before {
      display: none;
    }

    :after {
      display: none;
    }
  }
`;

const itemZenn = css`
  width: 37%;
  background: #161616;
  transition: all 0.2s;

  :hover {
    background: #dd7f0b;
  }

  :after {
    transition: all 0.2s;
    position: absolute;
    right: 0px;
    top: 0;
    content: "";
    width: 100px;
    height: 100%;
    background: #161616;
    clip-path: polygon(100% 0%, 100% 0%, 0% 100%, 100% 100%);
  }

  @media (max-width: 700px) {
    width: 100%;

    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    background: #dd7f0b;

    :before {
      display: none;
    }

    :after {
      display: none;
    }
  }
`;
