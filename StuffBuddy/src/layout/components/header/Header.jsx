import React, { PureComponent } from 'react';
import './header.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-content-wrapper">
        <div className="header-logo">STUFFBUDDY</div>
      </div>
    );
  }
}

export default Header;
