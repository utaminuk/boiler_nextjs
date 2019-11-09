import React from 'react';
import styled from 'styled-components';

// next
import { NextComponentType } from 'next';

// components
import Header from '~/components/Header';
import Footer from '~/components/Footer';

interface LayoutDefaultProps {
  path: string;
  children?: React.ReactNode;
}

const LayoutDefault = (props: LayoutDefaultProps) => {
  return (
    <React.Fragment>
      <Header path={props.path} />
      <Container>{props.children}</Container>
      <Footer />
    </React.Fragment>
  );
};

const Container = styled.div`
  padding: 60px;
`;

export default LayoutDefault;
