import React from 'react';
import styled from 'styled-components';

// next
import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => (
  <div>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <Title>Next.js! About</Title>

      <ul>
        <li>TypeScript利用が可能</li>
        <li>styled-componentsが利用可能</li>
        <li>デフォルトの404,500の差し替えページが用意されている</li>
        <li>「~」を利用しての絶対パス指定ができる（例: ~/components/Hoge）</li>
      </ul>
    </div>
  </div>
);

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default About;
