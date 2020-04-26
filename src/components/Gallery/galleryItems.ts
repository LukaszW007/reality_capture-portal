// global dependencies
import { v4 as uuidv4 } from 'uuid';

const GalleryItems = [
  {
    id: uuidv4(),
    picture: require('../../assets/SVG/icon-laser-scanner.svg'),
    title: 'Terrestrial Laser Scanners',
    listOfDeviceTypes: ['Phase scanner', 'Pulse scanner'],
    listOfDeviceBrands: [
      'Leica RTC360',
      'Leica P and C-series',
      'Faro X and S series',
      'Trimble X7',
      'Trimble TX series',
      'Z+F IMAGER 5016',
      'Stonex X9',
      'Topcon GLS-2000',
      'Riegl VZ series',
    ],
  },
  {
    id: uuidv4(),
    picture: require('../../assets/SVG/icon-photogrammetry.svg'),
    title: 'Photogrammetry',
    listOfDeviceTypes: [
      'Camera mounted on multicopter',
      'Camera mounted on fixed-wing UAV',
      'DSLR',
      'Mirrorless camera',
      '360 camera',
    ],
    listOfDeviceBrands: [
      'DJI Phantom series',
      'DJI Inspire',
      'DJI Mavic series',
      'Autel EVO 2',
      'Parrot Anafi',
      'WingtraOne',
      'eBee',
      'Insta360',
      'Ricoh Theta',
    ],
  },
  {
    id: uuidv4(),
    picture: require('../../assets/SVG/icon-mobile-mapping.svg'),
    title: 'Mobile Mapping',
    listOfDeviceTypes: [
      'Mounted on a car',
      'Mounted on UAV',
      'Backpack',
      'Trolley',
      'Mounted on a rolling stock',
    ],
    listOfDeviceBrands: [
      'Stormbee',
      'NavVis M3',
      'Trimble GEDO System',
      'Leica Pegasus series',
      'Leica SiTrack',
      'Gexcel Heron backpacks series',
      'Faro Focus Swift',
      'Trimble Indoor Mobile Mapping System',
      'Topcon IP-S3',
    ],
  },
  {
    id: uuidv4(),
    picture: require('../../assets/SVG/icon-handheld-scanner.svg'),
    title: 'Handheld Scanners',
    listOfDeviceTypes: [
      'LiDAR scanner',
      'Structured-light 3D scanner',
      'Depth sensor',
    ],
    listOfDeviceBrands: [
      'Artec series',
      'Creaform Go!SCAN Spark',
      'EinScan Pro 2x Plus',
      'Leica BLK2GO',
      'Paracosm PX-80',
      'DotProduct DPI-10',
      'GeoSLAM ZEB Revo RT',
      'Calibry',
      'Intel RealSense cameras',
    ],
  },
];

export default GalleryItems;
