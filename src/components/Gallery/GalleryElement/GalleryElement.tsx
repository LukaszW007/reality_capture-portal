// global dependencies
import React from 'react';

// local dependencies
import styles from './GalleryElement.module.scss';
// import galleryItems from '../galleryItems';

interface GalleryItemsProps {
  id: string;
  picture: string;
  title: string;
  listOfDeviceTypes: ReadonlyArray<string>;
  listOfDeviceBrands: ReadonlyArray<string>;
}

interface GalleryItemState {
  hover: boolean;
}

class GalleryElement extends React.Component<
  GalleryItemsProps,
  GalleryItemState
> {
  constructor(props: GalleryItemsProps) {
    super(props);

    this.state = { hover: false };
  }

  hoverOn(e: any) {
    this.setState({ hover: true });
  }

  hoverOff(e: any) {
    this.setState({ hover: false });
  }

  render() {
    const {
      id,
      picture,
      title,
      listOfDeviceTypes,
      listOfDeviceBrands,
    } = this.props;

    const { hover } = this.state;

    if (hover === undefined) {
      return null;
    }

    return (
      <div
        onMouseEnter={e => this.hoverOn(e)}
        onMouseLeave={e => this.hoverOff(e)}
        className={styles.GalleryElementContainer}
      >
        <div
          className={
            hover
              ? styles.galleryElementContainerForImageAndTitle_hovered
              : styles.galleryElementContainerForImageAndTitle
          }
        >
          <img
            src={picture}
            alt={title}
            className={styles.galleryElementImage}
          />
          <p className={styles.galleryElementTitle}>{title}</p>
          <ul className={styles.galleryElementListOfDeviceTypes}>
            {listOfDeviceTypes.map((item, index) => (
              <li
                key={id + index}
                className={styles.galleryElementListTypesItem}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ul
          className={
            hover
              ? styles.galleryElementListOfDeviceBrands_hovered
              : styles.galleryElementListOfDeviceBrands
          }
        >
          {listOfDeviceBrands.map((item, index) => (
            <li
              key={id + index + 1}
              className={styles.galleryElementListBrandItem}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GalleryElement;
