const Button = ({functionValue, children}) => {
    return <button onClick={functionValue}>{children}</button>;
  }

  export default Button;