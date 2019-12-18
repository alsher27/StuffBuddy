import { connect } from 'react-redux';
import Menu from './Menu';
import { deviceSearch } from '../../redux/device/deviceActions';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  devicesShown: state.deviceReducer.devicesShown,
});

const mapDipatchToProps = {
  deviceSearch,
};

export default connect(mapStateToProps, mapDipatchToProps)(Menu);
