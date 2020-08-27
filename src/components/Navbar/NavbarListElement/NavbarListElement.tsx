// global dependencies
import React from 'react';

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
        <a href={reference}>{listElementName}</a>
      </li>
    </>
  );
};

export default NavbarListElement;
