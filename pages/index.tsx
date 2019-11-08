import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';

// next
import { NextPage } from 'next';
import Head from 'next/head';

// components
import LayoutDefault from '~/layout/Default';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/global.css" rel="stylesheet" />
    </Head>

    <LayoutDefault path="/">
      <Title>Next.js! boilerplate</Title>
    </LayoutDefault>
  </div>
);

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default Home;
