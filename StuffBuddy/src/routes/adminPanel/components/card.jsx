import React, { PureComponent } from 'react';

export default class Card extends PureComponent {
  render() {
    const { name, email } = this.props;
    return (
      <>
        <br />
        <p>{name}</p>
        <p>{email}</p>
        <br />
      </>
    );
  }
}
