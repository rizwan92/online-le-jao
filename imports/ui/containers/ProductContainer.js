import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '../../api/products';
import ProductContainer from '../components/ProductContainer/ProductContainer';
export default createContainer(() => {
  return {
    products: Products.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, ProductContainer);
