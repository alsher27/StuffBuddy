import { connect } from 'react-redux';
import Card from './Card';
import { orderCreate } from '../../../redux/order/orderActions';

const mapDipatchToProps = {
  orderCreate,
};

export default connect(null, mapDipatchToProps)(Card);
