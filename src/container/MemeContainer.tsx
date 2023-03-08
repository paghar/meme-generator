import React, {useEffect, useReducer, useRef} from "react";
import Meme from "../components/meme/Meme";
import * as htmlToImage from "html-to-image";
import {memeReducer,initialState} from "../data/constants/memeReducer";
import {MemeAction} from "../data/enum";

const MemeContainer = () => {

  const [state, dispatch] = useReducer(memeReducer, initialState);
  const memoRef = useRef<HTMLDivElement>(null);

  const downloadMomo = async () => {  
    const dataUrl = state.previewImage;   
    const link = document.createElement("a");   
    link.download = `momo-${Date.now()}.png`;  
    link.href = dataUrl;   
    link.click();
  }; 

  const dispatchContext = (type:MemeAction,payload:any) => { 
    dispatch({
      type: type,
      payload: payload,
    });
  }; 

  useEffect( ()=>{
    const fetchImage = async () => {
      if (memoRef.current !== null) {       
        const image = await htmlToImage.toPng(memoRef.current);     
        dispatchContext(MemeAction.SetPreviewImage,image);      
      }  
    };
    fetchImage();   
  });
  
  return(
    <Meme
      state={state}
      dispatchContext={dispatchContext}
      downloadMomo={downloadMomo}
      memoRef={memoRef}
    />
  );
};

export default MemeContainer;