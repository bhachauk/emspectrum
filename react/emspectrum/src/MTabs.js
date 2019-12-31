import React, {Component} from 'react';
import DefaultNote from './DefaultNote.js'
import Spectrumdetail from './Spectrumdetail.js'
import Tabs from './Tabs.js'
import {openTab, makeDisplay} from './Utils.js'


const MTabs = (props) => {

  const mtabBtnClass = "mtabButtons"
  const mtabContentClass = "mtabContent"
  const mtabDefault = "mtabDefault"

  const openTabHere = (evt, val) => { 
    openTab (evt, val, mtabContentClass)
  }
  
  return(
    <div>
    <div className="header">
    <div id="headerTitle"><a href="/">Electro-Magnetic-Spectrum</a></div>
    <div className="TabBar">
            { Object.keys(props.data).map( 
              (k) => (<button className={mtabBtnClass} onClick={(e) => openTabHere(e, k)}>{k.toUpperCase()}</button>)
            )}
    </div></div>
    <div className="outContainer">
        <div>
          { Object.keys(props.data).map( 
              (k) => (<div className={mtabContentClass} id={k}>
                <Tabs data={props.data[k]}/>
              </div>)
          )}
        </div>
            <div className= { mtabContentClass + ' ' + mtabDefault}>
              <DefaultNote/>
            </div> 
    </div>
    </div>
  );
}

export default MTabs;