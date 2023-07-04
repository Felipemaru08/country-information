import cx from 'clsx';
import PropTypes from 'prop-types';

const ContentLayout = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={cx(
        'w-full max-w-[calc(1280px_+_2rem)] mx-auto my-0 p-4',
        className
      )}
    >
      {children}
    </div>
  );
};

ContentLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { ContentLayout };
