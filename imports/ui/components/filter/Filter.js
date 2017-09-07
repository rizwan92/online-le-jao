import React from 'react';
import Checkbox from 'material-ui/Checkbox';
export default class Filter extends React.Component {
 render(){
  return(
    <div className="filter">
      <h3>Filter</h3>
      <Checkbox label="Flipkart "/>
      <Checkbox label="Amazon"/>
      <Checkbox label="Dream Store"/>
      <Checkbox label="Others"/>
    </div>
  );
 }

}
