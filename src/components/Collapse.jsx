import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse(props) {
    const collapseWidth = props.collapseWidth;
    const collapseText = props.collapseText;
    const collapseTitle = props.collapseTitle;
    const collapseTitleSize = props.collapseTitleSize;
    const IsList = props.IsList;

    const [buttonAction, setActif] = useState(false)

    return (
            <article style={{width: collapseWidth ? collapseWidth : '70%'}}>
                <div className="App-collapse">
                <span style={{fontSize: collapseTitleSize ? `${collapseTitleSize}` : '18px'}}>{collapseTitle}</span>
                    <button className={buttonAction ? "App-collapse-button" : "App-collapse-button collapse-active"} onClick={()=>buttonAction ? setActif(false) : setActif(true)}><FontAwesomeIcon icon={faChevronDown} size="2xl" /></button>
                </div>
                <div className={buttonAction ? "App-collapse-text open" : "App-collapse-text"}>
                {IsList ? <ul style={{padding:0,margin:0}}>{collapseText}</ul> : collapseText}
                </div>
            </article>
    )
  }
  
  export default Collapse