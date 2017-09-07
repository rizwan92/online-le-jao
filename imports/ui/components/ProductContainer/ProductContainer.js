import React, { Component } from 'react';
import ProductCards from './ProductCards';
import {Image, Transformation,} from 'cloudinary-react';
export default class ProductContainer extends Component {
  render() {
    return (
      <div>
          <div className="productContainer">
              {this.props.products.map((product,i) =>{
                if (i>15) {
                  return false;
                }
                return(<div className="productItem" key={i}>
                        <ProductCards isAdmin={this.props.isAdmin}   product={product}/>
                        </div>);
            }  ) }
          </div>
      </div>
    );
  }
}
