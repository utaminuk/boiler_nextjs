import React from 'react';
import styled from 'styled-components';

// next
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

// components
import LayoutDefault from '~/layout/Default';

type ErrorPropsType = {
  statusCode: number;
};

const Error: NextPage<ErrorPropsType> = ({ statusCode }) => (
  <React.Fragment>
    <Head>
      <title>Error</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/global.css" rel="stylesheet" />
    </Head>

    <LayoutDefault path="/error">
      <Title>{statusCode}: エラーが発生しました</Title>
    </LayoutDefault>
  </React.Fragment>
);

// getInitialPropsはpagesのみ
Error.getInitialProps = async ({ res, err }: NextPageContext): Promise<ErrorPropsType> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default Error;
