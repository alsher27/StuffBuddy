import { connect } from 'react-redux';
import Order from './Order';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  order: state.orderReducer.order,
});

export default connect(mapStateToProps)(Order);
