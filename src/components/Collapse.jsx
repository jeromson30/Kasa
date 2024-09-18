import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

function Collapse(props) {
    const collapseWidth = props.collapseWidth
    const collapseText = props.collapseText
    const collapseTitle = props.collapseTitle
    const collapseTitleSize = props.collapseTitleSize
    const IsList = props.IsList

    const [buttonAction, setActif] = useState(false)

    return (
            <article style={{width: collapseWidth ? collapseWidth : '100%'}} className="App-collapse-article">
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

Collapse.propTypes = {
    collapseWidth: PropTypes.string,
    collapseText: PropTypes.string,
    collapseTitle: PropTypes.string,
    collapseTitleSize: PropTypes.string,
    IsList: PropTypes.bool
}
  
  export default Collapse