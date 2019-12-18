import React, { PureComponent } from 'react';
import './menuHeader.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-content-wrapper">
        <div className="header-logo">STUFFBUDDY</div>
        <div className="header-search" />
      </div>
    );
  }
}

export default Header;
