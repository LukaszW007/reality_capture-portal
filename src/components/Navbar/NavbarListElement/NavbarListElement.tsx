//global dependencies
import React from 'react';

//local dependencies
import styles from './NavbarListElement.module.scss';

interface Props {
    listElementName: string;
}

const NavbarListElement = (props: Props) => {
    const { listElementName } = props;
    return(
        <React.Fragment>
            <li className={styles.NavbarListElement}>{listElementName}</li>
        </React.Fragment>
    )
};

export default NavbarListElement;
