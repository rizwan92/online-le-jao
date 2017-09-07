import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '../../api/products';
import HomePage from '../pages/HomePage';
export default createContainer(() => {
  return {
    products: Products.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, HomePage);
