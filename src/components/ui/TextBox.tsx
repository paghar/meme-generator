import React from "react";

interface IInputProps {    
  id?: string,
  className?:string,
  value?:string | number ,
  type: "text" | "number" | "textArea"| "color" ,
  placeholder?:string,
  onChange?:(e:any) => void,
  name?:string,
}

const TextBox = (props:IInputProps) => {

  const renderElement = props.type === "textArea" 
    ? <textarea 
      id ={props?.id}
      className={props?.className}                 
      value={props?.value}           
      placeholder={props?.placeholder} 
      onChange={props.onChange}
      name={props?.name}       
    >            
    </textarea>
    :  <input 
      id ={props?.id}
      className={props?.className}                 
      value={props?.value}
      type={props?.type}
      placeholder={props?.placeholder} 
      onChange={props.onChange}
      name={props?.name}            
    />;

  return renderElement;
       
    
};

export default TextBox;