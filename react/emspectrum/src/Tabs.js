import React, {Component} from 'react';
import DefaultNote from './DefaultNote.js'
import Spectrumdetail from './Spectrumdetail.js'
import {openTab, makeDisplay} from './Utils.js'
import Tab from './Tab.css'

const Tabs = (props) => {

  const tabBtnClass = "tabButtons"
  const tabContentClass = "tabContent"
  const tabDefault = "tabDefault"

  const openTabHere = (evt, val) => { 
    openTab (evt, val, tabContentClass)
  }

  const getButtonStr  = (data) =>{
    return (
      <div className="tabBtn">
      <h4>{data.name.toUpperCase()}</h4>
      <code>{data.range}</code>
      </div>
      )
  }

  return(
    <div>
    <div className="txt-center">
        <img src={props.data.img} width="30%"/>
    </div>
    <h4>Notes :</h4>
    <ul>
    { props.data.notes.map( 
      (k) => (<li>{k}</li>)
    )}
    </ul>
    <div className ="inheader">
     <div className="TabBar">
            { props.data.bands.map( 
              (k) => (<button className={tabBtnClass} onClick={(e) => openTabHere(e, k.name, {tabContentClass})}>{getButtonStr(k)}</button>)
            )}
     </div></div>
      <div>
            { props.data.bands.map( 
                (k) => (<div className={tabContentClass} id={k.name}>
                <Spectrumdetail detail={k}/>
                </div>)
              )}
      </div>
    </div>
  );
}

export default Tabs;