import React from "react";

// This file exports the Input, TextArea, and FormBtn components

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }

import classes from './form.css'


const input = (props) => {

  let inputElement = null;

  switch (props.inputType){
    case ('input'):
    inputElement = <input className={classes.InputElement}{...props}/>
    break;
    case ('textarea'):
    inputElement = <textarea className={classes.InputElement}{...props}/>;
    break;
    default:
    inputElement = <input className ={classes.InputElement}{...props}/>;

  }
  return(
  <div className={classes.Input}>
    <label className={classes.Label} >{props.label}</label>
    {inputElement}
  </div>
  );

}
export default input;