import { ReactNode } from "react";

interface props {
  //text:string;
  children: ReactNode;
  onClose: () => void;

}

const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dimissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
