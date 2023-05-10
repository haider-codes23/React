interface props {
  children: string;
  onClick: () => void;
  color: string;
}

const Button = ({children, onClick, color}: props) => {
  return (
    <div>
      <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    </div>);
}

export default Button;