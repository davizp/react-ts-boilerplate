import React from 'react';
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

export default Icons;
