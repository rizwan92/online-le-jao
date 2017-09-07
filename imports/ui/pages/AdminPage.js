import React, { Component } from 'react';
import Header from '../components/header/Header.js';
import SearchBar from '../components/SearchBar/SearchBar';
import InsertProduct from '../components/insertProduct/InsertProduct.js';
import ProductContainer from '../containers/ProductContainer';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
export default class AdminPage extends Component {
  constructor(){
    super();
    this.state={searchproduct:'',filter:'', specify: ''};
    }
  handleDropdown(text){
    this.state.specify='';
    this.setState({filter:text});
  }
  handleDropdown1(text){
    this.state.filter='';
  this.setState({specify:text});
  }
  onChangeHandle(text){
    this.state.specify='';
    this.state.filter='';
    this.setState({searchproduct:text});
  }
  render() {
    return (
      <div >
        <Header  handleDropdown={this.handleDropdown.bind(this)} isAdmin={true} handleDropdown1={this.handleDropdown1.bind(this)}  />
        <div className="grid container-fluid">
            <Row>
              <Col xs={12} sm={12} md={2}></Col>
              <Col xs={12} sm={12} md={8}>
                <Row>
                  <Col xs={12} sm={3} md={3} className="text-center"></Col>
                  <Col xs={12} sm={6} md={6} className="text-center"><InsertProduct /></Col>
                  <Col xs={12} sm={3} md={3} className="text-center"></Col>
                </Row><br />
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}><ProductContainer isAdmin={true} /></Col>
                </Row>
              </Col>
            <Col xs={12} sm={12} md={2}></Col>
          </Row>
        </div>
        </div>
    );
  }
}
