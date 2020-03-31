import React, {Components} from 'react';

import React from "react";

const Date = props => (
  <div className="date">&copy; {props.date}</div>
);


// class Date extends Component {
//   state={
//     curTime : new Date().toLocaleString(),
//   }
//   render(){
//     return (
//       <div className="App">
//         <p>Current Time : {this.state.curTime}</p>
//       </div>
//     );
//   }
// }

export default Date;