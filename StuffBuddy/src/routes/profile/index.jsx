import { connect } from 'react-redux';
import Profile from './Profile';
import { userChange } from '../../redux/auth/authActions';
import { userDevicesGet } from '../../redux/device/deviceActions';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  userDevices: state.deviceReducer.userDevices,
});

const mapDispatchTpProps = {
  userChange,
  userDevicesGet,
};

export default connect(mapStateToProps, mapDispatchTpProps)(Profile);
