// global dependencies
import { v4 as uuidv4 } from 'uuid';

const realityCaptureCarouselItems = {
  enableDescription: true,
  enableTextIndicators: true,
  enableDotIndicators: false,
  items: [
    {
      id: uuidv4(),
      title: 'Laser scanning',
      picture: require('../images/RTC360.webp'),
      pictureAlt: require('../images/RTC360.jpg'),
      content:
        'The fastest and the most effective method for digitalizing geometry of existing facilities like buildings, roads, terrain, railroads and many more.  As a final product, it delivers cloud of million or even billion points positioned with millimeter accuracy. It is the best way to create digital twin of the construction and thereby transform into sustainable facility. Laser scanning is the very first step to produce 3D digital documentation in BIM (Building Information System) technology which leads to sustainable and robust architecture’s maintenance with the use of IoT (Internet of Things).',
    },
    {
      id: uuidv4(),
      title: 'Photogrammetry',
      picture: require('../images/photogrammetry.jpg'),
      pictureAlt: require('../images/photogrammetry.jpg'),
      content:
        'It’s old technique harnesses the stereography method to create the 3D representation of photographed object. This object can be a building, terrain, road, etc. Advances in technology and miniaturization increase the resolution of photos and their quality while reducing size of the cameras themselves. Nowadays, UAVs (Unmanned Aerial Vehicle) like semi-professional drones can collect hundreds of high resolution pictures during one flight session which become 3D model by using photogrammetric software.',
    },
    {
      id: uuidv4(),
      title: 'Mobile Mapping',
      picture: require('../images/mobile_mapping.jpg'),
      pictureAlt: require('../images/mobile_mapping.jpg'),
      content:
        'Mobile mapping lets to collect terabytes of accurate terrestrial data (imagery and point cloud) in relatively short time. Urbanized areas, complex buildings, long constructions like roads, tunnels, railroads or even whole cities suppose to be scanned fast comparing to area size. In this case, mobile scanning which bases on complex scanning systems mounted on a vehicle or a man is the best solution. It usually contains IMU, LiDAR scanner(s), GNSS antenna(s) and several cameras for 360 panorama pictures. Collected data from all of these sensors are combined together in a single point cloud and series of pano-pictures. This type of equipment is used during driving by car, trolley, quad, railway car or can be carried by a man in hand or in backpack.',
    },
    {
      id: uuidv4(),
      title: 'Handheld scanning',
      picture: require('../images/handheld_scanner.webp'),
      pictureAlt: require('../images/handheld_scanner.jpg'),
      content:
        'It uses one of several different methods of measurements. They differ with accuracy of the point cloud and speed of collecting data. By choosing the most suitable technique of handheld scanning to a purpose it can become standalone solution or a supplement to terrestrial scanning. Aerospace, textile industry, automotive industry and generally mechanics use the most accurate scanning arms which reach fraction of a millimeter accuracy. Much cheaper and not so precise scanners are used in AEC (Architecture, Engineering & Construction), gaming industry and for a hobbyist’s purpose to create a 3D digital copy of a small room, a piping or e.g. a car.',
    },
  ],
};
export default realityCaptureCarouselItems;
