import { connect } from 'react-redux';
import AddNew from './AddNew';
import { deviceCreate } from '../../redux/device/deviceActions';

const mapDispatchToProps = {
  deviceCreate,
};

export default connect(null, mapDispatchToProps)(AddNew);
