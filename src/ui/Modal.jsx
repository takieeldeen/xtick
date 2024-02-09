import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(19px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
`;
const StyledModal = styled.div`
  background-color: rgb(var(--teal-800));
  color: rgb(var(--teal-50));
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  padding: 2.5rem 2rem 1rem;
  position: relative;
  z-index: 1001;
  cursor: default;
`;
const Button = styled.button`
  color: rgb(var(--teal-100));
  font: inherit;
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindow }) {
  const { open, openName } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindow),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <motion.div>
        <StyledModal>
          <Button onClick={close}>
            <HiXMark />
          </Button>
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </StyledModal>
      </motion.div>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
