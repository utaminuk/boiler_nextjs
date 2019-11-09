import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <React.Fragment>
    <Copyright>footer</Copyright>
  </React.Fragment>
);

const Copyright = styled.div`
  width: 100%;
  border-top: 0.8px solid #aaa;
  height: 60px;
  line-height: 60px;
  background: #fff;
  font-size: 12px;
  color: #666;
  text-align: center;
`;

export default Footer;
