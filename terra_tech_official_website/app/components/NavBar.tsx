import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './navbar.module.css';

// Define the type for each item in the props array
type NavItem = {
  Link: string;
  Name: string;
  ContainerStyles: any;
  TextStyles: any;
};

// Define the type for the props of the NavBar component
type Props = {
  items: NavItem[];
//   ContainerStyles: any
//   TextStyles: any
};

// Functional component definition
const NavBar: React.FC<Props> = ({items}) => {
  return (
    <div>
        <div>
            <Logo/>
        </div>
        <div>
            {items.map((item, index) => (
            <Link key={index} href={item.Link} className={item.ContainerStyles}>
            <p className={item.TextStyles}>{item.Name}</p>
            </Link>
        ))}
        </div>
    </div>
  );
};

export default NavBar;