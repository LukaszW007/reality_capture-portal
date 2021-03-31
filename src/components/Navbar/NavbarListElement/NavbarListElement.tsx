// global dependencies
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// local dependencies
import { Link } from 'gatsby';
import styles from './NavbarListElement.module.scss';

interface Props {
  listElementName: string;
  reference: string;
}

const NavbarListElement = (props: Props) => {
  const { listElementName, reference } = props;
  if (listElementName === 'Blog') {
    return (
      <>
        <li className={styles.NavbarListElement}>
          <Link to={reference}>{listElementName}</Link>
        </li>
      </>
    );
  }
  return (
    <>
      <li className={styles.NavbarListElement}>
        <OutboundLink href={reference}>{listElementName}</OutboundLink>
      </li>
    </>
  );
};

export default NavbarListElement;
