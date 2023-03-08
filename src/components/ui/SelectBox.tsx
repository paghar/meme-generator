import React from "react";
import {ISelectBoxItem} from "../../data/interface";

interface ISelectBox {    
  id?: string,
  className?:string,
  items:ISelectBoxItem[], 
  selectedValue?:string | number,  
  onChange?:(e:any) => void,   
}

const SelectBox = (props:ISelectBox) => {

  const items = props?.items?.map((item:ISelectBoxItem)=>{        
    return <option key={item.value} value={item.value}>{item.text}</option>; 
  });

  return (    
    <select id={props?.id} className={props?.className} value={props.selectedValue} onChange={props.onChange} >                   
      {items}                           
    </select>   
  );
};

export default SelectBox;

