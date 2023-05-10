interface props {
  //text:string;
  children: string;
}

const Alert = ({children}: props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert;