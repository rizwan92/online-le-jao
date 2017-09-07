import React, { Component } from 'react';
import './Header.css';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class Header extends Component {
  handleDropdown(text){
       this.props.handleDropdown(text);
 }
 handleDropdown1(text){
  this.props.handleDropdown1(text);
}
reload(){
  window.location.reload();
}
  render() {
    return (
      <div className="header">
          <div className="headeritem one"><h3><a style={{color:'#40c4ff'}} onClick={this.reload.bind(this)}>onlinelejao</a></h3></div>
          <div className="headeritem"></div>
          <div className="headeritem three">{ this.props.isAdmin ? null :
          <DropdownButton bsStyle="primary" pullRight title="Filter" id="split-button-pull-right">
              <MenuItem eventKey="1" onClick={() => this.handleDropdown("flipkart")}>Flipkart</MenuItem>
              <MenuItem eventKey="2" onClick={() => this.handleDropdown("amazon")}>Amazon</MenuItem>
              <MenuItem eventKey="3" onClick={() => this.handleDropdown("dream store")}>Dream Store</MenuItem>
              <MenuItem eventKey="4" onClick={() => this.handleDropdown("other")}>other</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="5" onClick={() => this.handleDropdown1("male")}>Men</MenuItem>
              <MenuItem eventKey="6" onClick={() => this.handleDropdown1("female")}>Women</MenuItem>
              <MenuItem eventKey="7" onClick={() => this.handleDropdown1("couple")}>Couple</MenuItem>
              <MenuItem eventKey="8" onClick={() => this.handleDropdown1("other")}>Other</MenuItem>
            </DropdownButton>
          }
          </div>
      </div>
    );
  }
}
