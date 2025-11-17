import React from "react";

interface Props {
  children?: React.ReactNode;
  color?: string;
  onClick?: () => void;
}
const Buttons = ({ children, color, onClick }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
