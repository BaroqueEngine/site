import { css } from "@emotion/css";

type Props = {
  children: React.ReactNode;
  gap: number;
};

const GapContainer = ({ children, gap }: Props) => {
  return (
    <div style={{ gap }} className={container}>
      {children}
    </div>
  );
};

export default GapContainer;

const container = css`
  display: flex;
`;
