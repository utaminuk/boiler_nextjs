import React from 'react';
import styled from 'styled-components';

// next
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

type ErrorPropsType = {
  statusCode: number;
};

const Error = ({ statusCode }) => (
  <div>
    <Head>
      <title>Error</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <Title>{statusCode}: エラーが発生しました</Title>
    </div>
  </div>
);

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorPropsType => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default Error;
