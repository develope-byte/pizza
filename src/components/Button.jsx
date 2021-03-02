import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({ onClick, className, outLine, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outLine,
      })}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
