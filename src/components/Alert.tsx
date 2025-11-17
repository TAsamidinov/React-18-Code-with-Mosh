import React from "react";

interface Props {
  children?: React.ReactNode;
  onClose?: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div>
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  );
};

export default Alert;
