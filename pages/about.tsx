import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const About = () => (
  <div>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <Title>Next.js! About</Title>
      <p className="description">boiler</p>

      <div className="row">
        <a href="https://nextjs.org/docs" className="card"></a>
      </div>
    </div>
  </div>
);

const Title = styled.h1`
  font-size: 24px;
  color: #334;
`;

export default About;
