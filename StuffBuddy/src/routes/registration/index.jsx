import { connect } from 'react-redux';
import Registration from './Registration';
import { userRegister } from '../../redux/auth/authActions';

const mapDispatchToProps = {
  userRegister,
};

const mapStateToProps = (state) => ({
  isError: state.authReducer.isError,

});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
