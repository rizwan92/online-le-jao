import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import { Products } from '../../../api/products';
export default class InsertProduct extends Component {
  state = {
     value: 1,
     imageLink: '',
     uploadway:false,
   };
   uploadWay(){
     this.setState({uploadway:!this.state.uploadway});
   }

   uploadWidget() {

     let setImagelinkState = (link)=> {
       this.setState({imageLink:link});
     }

          cloudinary.openUploadWidget({ cloud_name: 'dcr2pfgxy', upload_preset: 'kzkxno3w', tags:['xmas']},
              function(error, result) {
                  setImagelinkState(result[0].secure_url);
              });
      }
      handleSubmit(event) {
         event.preventDefault();
         const productName = ReactDOM.findDOMNode(this.refs.productName).value.trim();
         const productDes = ReactDOM.findDOMNode(this.refs.productDes).value.trim();
         const productPrice = ReactDOM.findDOMNode(this.refs.productPrice).value.trim();
         const productType = ReactDOM.findDOMNode(this.refs.productType).value.trim();
         const productLink = ReactDOM.findDOMNode(this.refs.productLink).value.trim();
         const relateTo = ReactDOM.findDOMNode(this.refs.relateTo).value.trim();
         let imageLink = this.state.imageLink;
         try{
           const imageLink1 = ReactDOM.findDOMNode(this.refs.imageLink1).value.trim();
           if (imageLink1==='') {
             alert('image link is null please add image');
           }else {
             imageLink =imageLink1;
             console.log(imageLink);
           }
         }catch(err){
              console.log("you are using upload image");
         }

         if (imageLink==='') {
           alert('image link is null please add image');
           return false;
         }
         if (productType==='') {
          alert('select product type');
           return false;
         }
         if (relateTo==='') {
          alert('Select Product Specific');
           return false;
         }

         Products.insert({
           name:productName,
           description:productDes,
           price:productPrice,
           type:productType,
           link:productLink,
           specific:relateTo,
           image:imageLink,
           createdAt: new Date(), // current time
         });
      }
  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>

      <form onSubmit={this.handleSubmit.bind(this)}>
      <h1>Product Entry</h1>
      <input placeholder="Product Name" ref="productName"  className="form-control" required/><br />
      <input placeholder="Product Description" ref="productDes" className="form-control" /><br />
      <input  type="number" placeholder="Product Price" ref="productPrice" className="form-control" required/><br />
      <select
          ref="productType"
          className="form-control"
        required>
        <option value="">Select Type</option>
        <option value="flipkart">Flipkart</option>
        <option value="amazon">Amazon</option>
        <option value="dream store">Dream Store</option>
        <option value="other">Other</option>
        </select><br />
        <select
            ref="relateTo"
            className="form-control"
          >
          <option value="">Specific For</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="couple">Couple</option>
          <option value="other">Other</option>
          </select><br />
        <input placeholder="Product Page Link" ref="productLink" className="form-control" required/><br />
          <input type="checkbox" onChange={this.uploadWay.bind(this)} / >
      {this.state.uploadway ? <div> <i style={{fontSize:20,marginRight:8,}}> upload Image</i>
          <Button onClick={this.uploadWidget.bind(this)} bsStyle="info" >Add Image</Button></div> : <input placeholder="Image Link" ref="imageLink1" className="form-control" required/>} <br />
         <Button type="submit" bsStyle="success" >Submit</Button>
        </form>
      </div>
    );
  }
}
