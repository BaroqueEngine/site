import { css } from "@emotion/css";
import { useEffect, useState } from "react";

const NavLinks = () => {
  const [index, setIndex] = useState(0);
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const navHighlighter = () => {
      let targetIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.getBoundingClientRect().top <= 0) {
          targetIndex = i;
        }
      }

      setIndex(targetIndex);
    };

    window.addEventListener("scroll", navHighlighter);

    let sections: HTMLElement[] = [];
    document.querySelectorAll("section").forEach((section) => {
      sections.push(section);
    });
    setSections(sections);

    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, []);

  const names = ["EXPERIMENTS", "BOOKS & ARTICLES", "PROFILE"];
  const links = ["experiments", "articles", "profile"];

  return (
    <ul className={navItems}>
      {names.map((name, i) => {
        const className = i === index ? `${navLink} ${current}` : `${navLink}`;

        return (
          <li key={i} className={navItem}>
            <a className={className} href={`#${links[i]}`}>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;

const navItems = css`
  position: fixed;
  left: 5px;
  top: 100px;
  z-index: 10;

  font-family: "Tungsten";
  font-weight: 500;
  letter-spacing: 0.05rem;

  li {
    padding: 0;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

const navItem = css`
  margin-bottom: 10px;
`;

const navLink = css`
  position: relative;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.25s;

  :hover {
    color: #f7383f;
  }

  :before {
    position: absolute;
    left: -110px;
    top: 50%;
    content: "";
    width: 100px;
    height: 1px;
    background: #fff;
  }

  :after {
    position: absolute;
    left: calc(-10px - 3px);
    top: calc(50% - 3px);
    content: "";
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 9999px;
  }
`;

const current = css`
  margin-left: 15px;
`;
