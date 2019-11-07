import React from 'react';
import styled from 'styled-components';

// next
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

// components
import Header from '~/components/Header';
import Container from '~/components/Container';

type ErrorPropsType = {
  statusCode: number;
};

const Error: NextPage<ErrorPropsType> = ({ statusCode }) => (
  <div>
    <Head>
      <title>Error</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/global.css" rel="stylesheet" />
    </Head>

    <Header />

    <Container>
      <Title>{statusCode}: エラーが発生しました</Title>
    </Container>
  </div>
);

Error.getInitialProps = async ({
  res,
  err
}: NextPageContext): Promise<ErrorPropsType> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default Error;