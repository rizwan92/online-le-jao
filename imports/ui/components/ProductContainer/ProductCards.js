import React, { Component } from 'react';
import './ProductCards.css';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import { Products } from '../../../api/products';
export default class ProductCards extends Component {
constructor(){
  super();
  this.state={toggle:false}
}
onClick(){
  let result = confirm("Want to delete?");
  if (result) {
    Products.remove(this.props.product._id);    //Logic to delete the item
    }
  }
  onClickEdit(){
    this.setState({toggle:!this.state.toggle});
  }
  render() {
    return (
      <div>
        <Thumbnail className="thumbnail">
        {this.props.isAdmin ? <div className="cross" onClick={this.onClick.bind(this)}>X</div> : null}
          <a href={this.props.product.link}><Image src={this.props.product.image} className="image1" responsive /></a>
          <div className="productdetail">
          <div className="productdetailitem1"><h5><a href={this.props.product.link}>{this.props.product.name.charAt(0).toUpperCase()+this.props.product.name.slice(1)}</a></h5></div>
          <div className="productdetailitem2"><h5>{this.props.product.specific=='other' || this.props.product.specific=='' ? null : this.props.product.specific }</h5></div>
          <div className="productdetailitem3"><h5><i>Rs.{this.props.product.price}</i></h5></div>
          </div>
          <div><h6>{this.props.product.description.charAt(0).toUpperCase()+this.props.product.description.slice(1)}</h6></div>
        </Thumbnail>
      </div>
    );
  }
}
