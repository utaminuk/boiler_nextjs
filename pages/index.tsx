import React from 'react';
// import { withRouter } from 'next/router';
import styled from 'styled-components';

// next
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

// components
import LayoutDefault from '~/layout/Default';

const Home: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/global.css" rel="stylesheet" />
    </Head>

    <LayoutDefault path="/">
      <Title>Next.js! boilerplate</Title>

      <ul>
        <li>
          <Link href="/post/12">
            <a>Post: 12</a>
          </Link>
        </li>
      </ul>
    </LayoutDefault>
  </React.Fragment>
);

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default Home;
