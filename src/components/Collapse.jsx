import { useState } from "react";

function Collapse(props) {
    const collapseWidth = props.collapseWidth;
    const collapseText= props.collapseText;

    const [buttonAction, setActif] = useState(false)

    return (
            <article style={{width: collapseWidth ? collapseWidth : '70%'}}>
                <div className="App-collapse">Fiabilité 
                <button className={buttonAction ? "App-collapse-button" : "App-collapse-button collapse-active"} onClick={()=>buttonAction ? setActif(false) : setActif(true)}>V</button></div>
                <div className={buttonAction ? "App-collapse-text open" : "App-collapse-text"}>
                {collapseText}
                </div>
            </article>
    )
  }
  
  export default Collapse