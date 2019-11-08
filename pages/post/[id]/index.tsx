import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// next
import { NextPage } from 'next';
import Head from 'next/head';

// components
import LayoutDefault from '~/layout/Default';

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Post: {id}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/global.css" rel="stylesheet" />
      </Head>

      <LayoutDefault path="/post/[id]">
        <Title>Post : {id}</Title>
      </LayoutDefault>
    </div>
  );
};

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default Post;
