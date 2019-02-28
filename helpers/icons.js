import React from 'react';
import styled from 'styled-components';

import '../static/icons.svg';

const SVG = styled.svg`
  color: ${({ iconBg }) => iconBg};
  transition: 0.3s;
  width: ${({ width }) => width || '20px'};
  height: ${({ height }) => height || '20px'};
`;

const Icon = props => {
  return (
    <SVG {...props} className="IconSvg">
      <use xlinkHref={`#icons_${props.name}`} />
    </SVG>
  );
};

Icon.defaultProps = {
  iconBg: '#000'
};

export default Icon;
