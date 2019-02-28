import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
  width: 100vw;
`;

const Wrapper: React.FC = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Wrapper;
