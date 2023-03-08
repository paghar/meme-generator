import {MemeAction} from "../enum";
import {IinitialStateProps} from "../interface";

export const initialState:IinitialStateProps = {
  topText: "Top Image Text ... ",
  bottomText: "Bottom Image Text ...",    
  previewImage: "", 
  backgroundImage:"https://3.bp.blogspot.com/-3o7VZ79X9B4/UaWHC07l53I/AAAAAAAAA-c/RD922mGI89o/s400/GATO+CON+LENTES.jpg",
  fontSize: "40",
  fontColor:"#e7136f",
  fontName:"14", 
};

export const memeReducer = (state = initialState, action:any) => {

  switch (action.type) { 

    case MemeAction.SetTopText: 
      return {
        ...state,
        topText: action.payload
      }; 

    case MemeAction.SetBottomText: 
      return {
        ...state,
        bottomText: action.payload
      }; 

    case MemeAction.SetBackgroundImage: 
      return {
        ...state,
        backgroundImage: action.payload
      }; 

    case MemeAction.SetPreviewImage: 
      return {
        ...state,
        previewImage: action.payload
      }; 

    case MemeAction.SetFontSize: 
      return {
        ...state,
        fontSize: action.payload
      }; 

    case MemeAction.SetFontColor: 
      return {
        ...state,
        fontColor: action.payload
      }; 
    
    case MemeAction.SetFont: 
      return {
        ...state,
        fontName: action.payload
      }; 
          
    default: return state;
  }
};


















