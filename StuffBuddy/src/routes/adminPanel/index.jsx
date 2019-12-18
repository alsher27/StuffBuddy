import { connect } from 'react-redux';
import AdminPanel from './AdminPanel';

const mapStateToProps = (state) => ({
  adminUsers: state.authReducer.adminUsers,
});

export default connect(mapStateToProps)(AdminPanel);
