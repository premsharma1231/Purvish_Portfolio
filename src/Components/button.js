import React from 'react';
import '../button.scss';

const Button = ({ as, children, filled, secondary, ...rest }) => {
  const Element = as || 'button'; // Default to 'button' if no `as` prop is passed
  return (
    <Element
      className={`dir-control ${
        secondary ? 'dir-control--secondary' : ''
      } ${filled ? 'dir-control--filled' : ''}`}
      {...rest}
    >
      {children}
      <span />
      <span />
      <span />
      <span />
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </Element>
  );
};

export default Button;
