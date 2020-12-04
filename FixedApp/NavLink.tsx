import { MDBNavItem } from 'mdbreact';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const NavLink: FC<{ to: string; label: string }> = ({ to, label }) => {
  const { pathname } = useRouter();
  const isActive = to === pathname;
  return (
    <MDBNavItem active={isActive}>
      <Link passHref href={to}>
        <a className="nav-link">{label}</a>
      </Link>
    </MDBNavItem>
  );
};

export default NavLink;
