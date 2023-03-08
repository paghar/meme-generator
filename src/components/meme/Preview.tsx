import React from "react";
import style from "./Meme.module.css";
import {fontItems} from "../../data/constants/constants";
import {IinitialStateProps} from "../../data/interface";

interface IPreviewProps{ 
  state:IinitialStateProps
  memoRef:React.RefObject<HTMLDivElement>, 
}

const  Preview = ({state,memoRef}:IPreviewProps) => {
  
  const fontName = fontItems.find((item) => item.value == parseInt(state.fontName))?.text;

  return (  
    <div   
      ref={memoRef}
      className={style.meme}    
      style={{        
        fontSize:`${state.fontSize}px`,   
        fontFamily : `${fontName}`,  
        color: state.fontColor,              
      }}
    >      
      <img className={style.meme} src={state.backgroundImage} />
      <div className={`${style.meme_text} ${style.meme_top}`}>
        {state.topText}         
      </div>

      <div className={`${style.meme_text} ${style.meme_bottom}`}>
        {state.bottomText}          
      </div>
      
    </div>         
  );
};

export default React.forwardRef(Preview);

