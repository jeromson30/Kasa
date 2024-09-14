import { useState } from "react";

function Collapse(props) {
    const collapseWidth = props.collapseWidth;
    const collapseText = props.collapseText;
    const collapseTitle = props.collapseTitle;
    const IsList = props.IsList;

    const [buttonAction, setActif] = useState(false)

    return (
            <article style={{width: collapseWidth ? collapseWidth : '70%'}}>
                <div className="App-collapse">
                <span>{collapseTitle}</span>
                    <button className={buttonAction ? "App-collapse-button" : "App-collapse-button collapse-active"} onClick={()=>buttonAction ? setActif(false) : setActif(true)}>V</button>
                </div>
                <div className={buttonAction ? "App-collapse-text open" : "App-collapse-text"}>
                {IsList ? <ul style={{padding:0,margin:0}}>{collapseText}</ul> : collapseText}
                </div>
            </article>
    )
  }
  
  export default Collapse