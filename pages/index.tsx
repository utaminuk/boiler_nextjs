import React from 'react';
import styled from 'styled-components';

// next
import { NextPage } from 'next';
import Head from 'next/head';

// components
import Header from '~/components/Header';
import Container from '~/components/Container';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/global.css" rel="stylesheet" />
    </Head>

    <Header />
    <Container>
      <Title>Next.js! boilerplate</Title>
      <p>&nbsp;</p>
    </Container>
  </div>
);

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default Home;
