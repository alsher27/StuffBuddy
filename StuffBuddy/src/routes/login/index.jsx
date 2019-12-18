import { connect } from 'react-redux';
import Login from './Login';
import { userLogin } from '../../redux/auth/authActions';

const mapDispatchToProps = {
  userLogin,
};

const mapStateToProps = (state) => ({
  isError: state.authReducer.isError,

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
