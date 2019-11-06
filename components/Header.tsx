import React from 'react';
import Link from 'next/link';

interface LinksModel {
  href: string;
  label: string;
  key?: string;
}
const links: LinksModel[] = [{ href: '/about', label: 'About' }, { href: '/why', label: 'Why' }].map(link => {
  link['key'] = `nav-link-${link.href}`;
  return link;
});

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Header;
