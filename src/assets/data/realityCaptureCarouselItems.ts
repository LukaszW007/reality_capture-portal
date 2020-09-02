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
      picture: require('../../assets/images/RTC360.jpg'),
      content:
        'The fastest and most effective method for creating documenta',
    },
    {
      id: uuidv4(),
      title: 'Photogrammetry',
      picture: require('../../assets/images/photogrammetry.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
    },
    {
      id: uuidv4(),
      title: 'Mobile Mapping',
      picture: require('../../assets/images/mobile_mapping.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
    },
    {
      id: uuidv4(),
      title: 'Handheld scanning',
      picture: require('../../assets/images/handheld_scanner.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
    },
  ],
};
export default realityCaptureCarouselItems;
