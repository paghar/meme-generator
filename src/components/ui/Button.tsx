import React from "react";

interface IBtnProps {
  id?: string,
  type:"button" | "submit" | "reset",
  className?:string,
  onClick:(event: any)=>void,
  children?: React.ReactNode
}

const Button = (props:IBtnProps) => {
  return (
    <button 
      id={props.id}
      type={props?.type} 
      className={props?.className} 
      onClick={props?.onClick}>
      {props?.children}
    </button>
  );
};

export default Button;