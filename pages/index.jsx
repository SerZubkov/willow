import React from 'react';
import styled from 'styled-components';

import Head from '../components/head';

const Title = styled.h1`
  color: red;
  font-size: 50px;
  height: 6000px;
`;

export default () => (
  <div>
    <Head title="Home" />
    <Title>My qwepage</Title>
  </div>
);
