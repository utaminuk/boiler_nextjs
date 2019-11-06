import React from 'react';
import styled from 'styled-components';

// next
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

// components
import Header from '~/components/Header';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <div>
      <Title>Next.js! boilerplate</Title>
      <div className="row">
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  </div>
);

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default Home;
