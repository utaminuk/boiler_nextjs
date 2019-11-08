import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface LinksModel {
  href: string;
  label: string;
  key?: string;
}
const links: LinksModel[] = [{ href: '/about', label: 'About' }].map(link => {
  link['key'] = `nav-link-${link.href}`;
  return link;
});

const Header = (props: { path: string }) => (
  <Nav>
    <NavItem>
      <Link href="/">
        <Item selected={props.path === '/'}>Home</Item>
      </Link>
    </NavItem>
    {links.map(({ key, href, label }) => (
      <NavItem key={key}>
        <Link href={href}>
          <Item selected={props.path === href}>{label}</Item>
        </Link>
      </NavItem>
    ))}
  </Nav>
);

const Nav = styled.ul`
  display: flex;
  list-style: none;
  height: 50px;
  background: #eee;
  padding: 0 20px;
`;

const NavItem = styled.li`
  font-size: 14px;
  line-height: 50px;
`;

type ItemProps = {
  selected: boolean;
};
const Item = styled.a`
  padding: 0 15px;
  text-decoration: none;
  display: block;
  line-height: 47px;
  width: 100%;
  transition: background 0.2s;
  cursor: ${(props: ItemProps) => (props.selected ? 'default' : 'pointer')};
  border-top: 3px solid ${(props: ItemProps) => (props.selected ? '#3f6' : 'transparent')};
  background: ${(props: ItemProps) => (props.selected ? '#fff' : 'transparent')};
  &&:hover,
  &&:focus {
    background: #fafafa;
  }
`;

export default Header;
