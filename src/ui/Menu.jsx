import { cloneElement, createContext, useContext, useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const StyledMenu = styled.div`
  position: relative;
`;

const MenuContent = styled.div`
  position: absolute;
  top: 100%;
  right: 100%;
  transform: translate();
  background-color: rgb(var(--neutral-100));
  padding: 0.3rem 0;
  border-radius: 0.2rem;
  box-shadow: 0 0 1.5rem rgba(var(--neutral-900), 0.2);
  z-index: 2;

  .icon {
    padding: 0 0.3rem;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const MenuContext = createContext();
function Menu({ children }) {
  const [openedMenuName, setOpenedMenuName] = useState("");
  const close = () => setOpenedMenuName("");
  const open = setOpenedMenuName;

  return (
    <MenuContext.Provider value={{ close, open, openedMenuName }}>
      <StyledMenu>{children}</StyledMenu>
    </MenuContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(MenuContext);

  return cloneElement(children, {
    onClick: () => open(opens),
  });
}

function Container({ children, name }) {
  const { openedMenuName, close } = useContext(MenuContext);
  if (name !== openedMenuName) return null;
  return (
    <MenuContent>
      <button className="icon" onClick={() => close()}>
        <IoMdClose style={{ cursor: "pointer" }} />
      </button>
      {children}
    </MenuContent>
  );
}

Menu.Open = Open;
Menu.Container = Container;
export default Menu;
