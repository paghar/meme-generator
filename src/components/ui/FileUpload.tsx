import React,{useRef} from "react";
import Button from "./Button";

interface IProps{
  btnText:string,
  handleChange:any,
  className?:any
}

export default function FileUpload({btnText,handleChange,className}:IProps) {

  const fileUploader = useRef<HTMLInputElement>(null);
  return (
    <>
      <input ref={fileUploader} style={{display: "none"}} type="file" onChange={handleChange}/>
      <Button
        id="upload"
        type="submit"
        className={className}
        onClick={() => fileUploader.current?.click()}
      >
        {btnText}
      </Button>
    </>
  );
  
}
