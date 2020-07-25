// global dependencies
import React from 'react';

// local dependencies
import styles from './Gallery.module.scss';
import GalleryElement from './GalleryElement';
import galleryItems from './galleryItems';

interface GalleryItems {
  id: string;
  picture: string;
  title: string;
  listOfDeviceTypes: ReadonlyArray<string>;
  listOfDeviceBrands: ReadonlyArray<string>;
}

const RealityCaptureTypesGallery: React.FC<GalleryItems> = () => {
  return (
    <div className={styles.GalleryContainer}>
      {galleryItems.map((item: GalleryItems) => (
        <GalleryElement
          key={item.id}
          id={item.id}
          picture={item.picture}
          title={item.title}
          listOfDeviceTypes={item.listOfDeviceTypes}
          listOfDeviceBrands={item.listOfDeviceBrands}
        />
      ))}
    </div>
  );
};

export default RealityCaptureTypesGallery;
