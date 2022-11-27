import { css } from "@emotion/css";

type Props = {
  children: React.ReactNode;
  padding: number;
};

const ImageLinks = ({ children, padding }: Props) => {
  return (
    <div style={{ gap: padding }} className={container}>
      {children}
    </div>
  );
};

export default ImageLinks;

const container = css`
  display: flex;
`;
