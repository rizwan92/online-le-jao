import React, { Component } from 'react';
import Header from '../components/header/Header.js';
import SearchBar from '../components/SearchBar/SearchBar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ProductContainer from '../components/ProductContainer/ProductContainer';
export default class HomePage extends Component {
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

     let filterProducts=this.props.products.filter(
      (product)=>{
        if (this.state.filter!=='') {
          return (product.type==this.state.filter);
        }else if (this.state.specify!=='') {
          return (product.specific==this.state.specify);
        }else {
          return (product.name.toLowerCase().indexOf(this.state.searchproduct.toLowerCase()) !==-1);
        }
      }
    );

    return (
      <div >
        <Header  handleDropdown={this.handleDropdown.bind(this)} handleDropdown1={this.handleDropdown1.bind(this)}  />
        <div className="grid container-fluid">
            <Row>
              <Col xs={12} sm={12} md={2}></Col>
              <Col xs={12} sm={12} md={8}>
                <Row className="searchrow">
                  <Col xs={12} sm={3} md={3} className="text-center"></Col>
                  <Col xs={12} sm={6} md={6} className="text-center"><h4><i className="tagline">Internet Ki Sabse Sasti Dukan</i><SearchBar onChange={this.onChangeHandle.bind(this)} /><h6></h6></h4></Col>
                  <Col xs={12} sm={3} md={3} className="text-center"></Col>
                </Row><br />
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}><ProductContainer products={filterProducts} /></Col>
                </Row>
              </Col>
            <Col xs={12} sm={12} md={2}></Col>
          </Row>
        </div>
        </div>
    );
  }
}
