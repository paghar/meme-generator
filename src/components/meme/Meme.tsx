import React from "react";
import Button from "../ui/Button";
import TextBox from "../ui/TextBox";
import SelectBox from "../ui/SelectBox";
import style from "./Meme.module.css";
import Preview from "./Preview";
import {sizeItems,fontItems} from "../../data/constants/constants";
import {MemeAction} from "../../data/enum";
import FileUpload from "../ui/FileUpload";
import {IinitialStateProps} from "../../data/interface";

interface IMemeProps{ 
  state:IinitialStateProps,
  dispatchContext:(type:MemeAction,payload:string)=>void,
  downloadMomo:()=>void,
  memoRef: React.RefObject<HTMLDivElement>,
}

const Meme = ({
  state,
  dispatchContext,
  downloadMomo,
  memoRef
}:IMemeProps) =>{

  const isValidFileUploaded=(file:string)=>{
    const validExtensions = ["png","jpeg","jpg","gif"];
    const fileExtension = file.split("/")[1];
    return validExtensions.includes(fileExtension);
  };

  const FileUploadChange = ((e:React.ChangeEvent<HTMLInputElement>)=>{  
    if (e.target.files?.length) {      
      if(isValidFileUploaded(e.target.files[0].type)){
        dispatchContext(MemeAction.SetBackgroundImage,URL.createObjectURL(e.target.files[0]));
      }      
    }  
  }); 

  return(
    <div className={style.wrapper}>
      <div className={style.row1} >

        <div className={style.row1col1}>
          <TextBox
            id="upperText"
            className={style.input}
            value={state.topText}
            type="textArea"
            placeholder="Upper Text"
            onChange={(e) => dispatchContext(MemeAction.SetTopText,e.target.value)} />
          <TextBox
            id="downText"
            className={style.input}
            value={state.bottomText}
            type="textArea"
            placeholder="Down Text"
            onChange={(e) => dispatchContext(MemeAction.SetBottomText,e.target.value)} />
          <FileUpload
            btnText="Image Upload (JPG / PNG / GIF)"
            handleChange={FileUploadChange}
            className={style.button} />
        </div>

        <div className={style.row1col2}>
          <SelectBox
            id="size"
            className={style.input}
            items={sizeItems}
            selectedValue={state.fontSize}
            onChange={(e) => dispatchContext(MemeAction.SetFontSize,e.target.value)} />
          <SelectBox
            id="font"
            className={style.input}
            items={fontItems}
            selectedValue={state.fontName}
            onChange={(e) => dispatchContext(MemeAction.SetFont, e.target.value)} />
          <TextBox
            id="color"
            value={state.fontColor}
            type="color"
            onChange={(e) => dispatchContext(MemeAction.SetFontColor, e.target.value)} />
         
          <Button
            id="downlaod"
            type="button"
            className={style.button}
            onClick={downloadMomo}
          >
            Download Image
          </Button>
        </div>

      </div>   

      <div className={style.row2}>
        <Preview 
          state={state}
          ref={memoRef}
        />
      </div>
                    
    </div>
  );
};

export default Meme;