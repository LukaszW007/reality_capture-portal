// global dependencies
import { v4 as uuidv4 } from 'uuid';

const carouselItems = [
  {
    id: uuidv4(),
    title: 'Laser scanning',
    picture: require('../../assets/images/RTC360.png'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
  },
  {
    id: uuidv4(),
    title: 'Photogrammetry',
    picture: require('../../assets/images/photogrammetry.png'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
  },
  {
    id: uuidv4(),
    title: 'Mobile Mapping',
    picture: require('../../assets/images/photogrammetry.png'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
  },
  {
    id: uuidv4(),
    title: 'Handheld scanning',
    picture: require('../../assets/images/photogrammetry.png'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad deserunt, enim est exercitationem facilis illum ipsum iure, mollitia placeat quia temporibus voluptatem. Asperiores assumenda id nesciunt totam. Eligendi, neque.',
  },
];
export default carouselItems;
