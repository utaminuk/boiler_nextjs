import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface LinksModel {
  href: string;
  label: string;
  key?: string;
}
const links: LinksModel[] = [
  { href: '/about', label: 'About' },
  { href: '/why', label: 'Why' }
].map(link => {
  link['key'] = `nav-link-${link.href}`;
  return link;
});

const Header = () => (
  <Nav>
    <NavItem>
      <Link href="/">
        <Item>Home</Item>
      </Link>
    </NavItem>
    {links.map(({ key, href, label }) => (
      <NavItem key={key}>
        <Link href={href}>
          <Item>{label}</Item>
        </Link>
      </NavItem>
    ))}
  </Nav>
);

const Nav = styled.ul`
  display: flex;
  list-style: none;
  height: 40px;
  background: #eee;
`;

const NavItem = styled.li`
  font-size: 14px;
  line-height: 40px;
`;

const Item = styled.a`
  padding: 0 10px;
  text-decoration: none;
  display: block;
  line-height: 40px;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s;
  &&:hover,
  &&:focus {
    background: #fafafa;
  }
`;

export default Header;
