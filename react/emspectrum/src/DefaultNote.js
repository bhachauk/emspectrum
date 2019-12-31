import React, {Component} from 'react';

const DefaultNote = () => ({
  render: function() {
 
  	var goals = [
  	    'Exploring EM Spectrum in simple UI',
        'Mapping the RealTime EM Things, Events to their Spectrum',
        'Trying to collect and group all EM Equipments with details',
        'Making it as Community Contribution to improve more'
  	]

  	var icons = [
  		'favicon.ico',
  		'github.png'
  	]

    return (
    	<div className="defaultNote">
        <div className="txt-center">
            <img src='img/em.gif' width="35%"/>
        </div>
          <h4>Goals</h4>
	        <ul>
	        	{goals.map((k) => (<li><pre>{k}</pre></li>))}
	        </ul>
	        <h4>Created with</h4>
	        <div className="txt-center">
	        	{icons.map((m) => (<img src= {m} className="createdIcons"/>))}	       
	        </div>
        </div>
    );
  }
});

export default DefaultNote;