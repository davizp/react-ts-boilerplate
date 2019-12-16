import React from 'react';
import PropTypes from 'prop-types';
import './Icons.modules.scss';

interface IconProps {
  name: string,
  color?: string,
  size?: string,
}

const Icons: React.SFC<IconProps> = ({name, color, size}) => {
  return (
    <i className={`icon-${name}`} />
  );
};

Icons.defaultProps = {
  color: 'default',
  size: 'medium',
};

export default Icons;
