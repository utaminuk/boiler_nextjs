import React from 'react';
import styled from 'styled-components';

// next
import { NextComponentType } from 'next';

// components
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const LayoutDefault: NextComponentType = props => (
  <div>
    <Header />
    <Container>{props.children}</Container>
    <Footer />
  </div>
);

const Container = styled.div`
  padding: 60px;
`;

export default LayoutDefault;
