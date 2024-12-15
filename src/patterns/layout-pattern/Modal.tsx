import { ReactNode, useState } from "react";
import styled from "styled-components";
type ModalProps = {
  children: ReactNode | ReactNode[];
};

const ModalBackground = styled.div`
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 1000%;
  background-color: rgba(0, 0, 0, 0.27);
  left: 0;
  top: 0;
  cursor: pointer;
`;

const ModalContent = styled.div`
  width: 50%;
  padding: 24px;
  margin: 12% auto;
  background-color: wheat;
  cursor: pointer;
`;
export const Modal = ({ children }: ModalProps) => {
  const [show, setShow] = useState(false);

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {!show && <button onClick={() => setShow(true)}> Show Modal</button>}
      {show && (
        <ModalBackground>
          <ModalContent onClick={handleModalContentClick}>
            <button onClick={() => setShow(false)}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};
