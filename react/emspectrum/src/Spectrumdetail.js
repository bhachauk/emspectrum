import React, {Component} from 'react';

const Spectrumdetail = (props) => {
  return (
    <div>
    <h4 className="txt-center">{props.detail.title}</h4>
    <pre>Frequency Range   :  {props.detail.range}</pre>
    <pre>Wavelength Range  :  {props.detail.wavelength}</pre>
    <pre>Energy Range      :  {props.detail.energy}</pre>
    </div>
  );
}

export default Spectrumdetail;