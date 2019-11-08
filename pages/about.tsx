import React from 'react';
import styled from 'styled-components';

// next
import { NextPage } from 'next';
import Head from 'next/head';

// components
import LayoutDefault from '~/layout/Default';

const About: NextPage = () => (
  <div>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/global.css" rel="stylesheet" />
    </Head>

    <LayoutDefault path="/about">
      <Title>どんな事が用意されているか</Title>

      <List>
        <Item>TypeScript利用が可能</Item>
        <Item>styled-componentsが利用可能</Item>
        <Item>デフォルトの404,500の差し替えページが用意されている</Item>
        <Item>「~」を利用しての絶対パス指定ができる（例: ~/components/Hoge）</Item>
      </List>
    </LayoutDefault>
  </div>
);

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

const List = styled.ul`
  margin: 20px 25px;
`;
const Item = styled.li`
  font-size: 13px;
  font-weight: 200;
  line-height: 130%;
  margin-bottom: 7px;
`;

export default About;
