// global dependencies
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// local dependencies
import styles from './NavbarListElement.module.scss';

interface Props {
  listElementName: string;
  reference?: string;
}

const NavbarListElement = (props: Props) => {
  const { listElementName, reference } = props;
  return (
    <>
      <li className={styles.NavbarListElement}>
        <OutboundLink href={reference}>{listElementName}</OutboundLink>
      </li>
    </>
  );
};

export default NavbarListElement;
