import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Panel = styled.div`
  flex: 1;
`;

type SplitScreenProps = {
  children: [ReactNode, ReactNode];
  containerProps?: HTMLAttributes<HTMLDivElement>;
};
export const SplitScreen = ({ children, ...props }: SplitScreenProps) => {
  const [left, right] = children;

  return (
    <Container {...props.containerProps}>
      <Panel>{left}</Panel>
      <Panel>{right}</Panel>
    </Container>
  );
};
