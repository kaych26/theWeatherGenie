import React, { Components } from 'react';
import "../styles/Time.css"


const Time = props => (
  <div className={props.name}>{props.time}</div>
);

export default Time;