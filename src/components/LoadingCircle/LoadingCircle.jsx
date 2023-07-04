import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';

const LoadingCircle = (props) => {
  const { className, size = 'inherit', ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={cx(
        'hb-LoadingCircle',
        `hb-LoadingCircle--size-${size}`,
        className
      )}
    />
  );
};

LoadingCircle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['inherit', 'small', 'medium', 'large']).isRequired,
};

export { LoadingCircle };
