import React, { Component } from 'react';
import './SearchBar.css';
import FormControl from 'react-bootstrap/lib/FormControl';
export default class SearchBar extends Component {
  constructor(){
    super();
  }
  onChnagehandle(event){
    let text=event.target.value;
   this.props.onChange(text);
  }
  render() {
    return (
          <div className="searchbar">
          <FormControl
           type="text"
           onChange={this.onChnagehandle.bind(this)}
           placeholder="Search"
           className="inputfield"
         >
         </FormControl>
        </div>
    );
  }
}
