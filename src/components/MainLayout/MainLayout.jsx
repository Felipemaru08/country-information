import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';

const MainLayout = (props) => {
  const { className, header, footer, children, ...otherProps } = props;

  return (
    <div {...otherProps} className={cx('hb-MainLayout', className)}>
      <header className='hb-MainLayout__header'>{header}</header>
      <div className='hb-MainLayout__children'>{children}</div>
      <div className='hb-MainLayout__footer'>{footer}</div>
    </div>
  );
};

MainLayout.propTypes = {
  className: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
};

export { MainLayout };
