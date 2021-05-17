// global dependencies
import { v4 as uuidv4 } from 'uuid';

const realityCaptureCarouselItems = {
  enableDescription: false,
  enableTextIndicators: false,
  enableDotIndicators: true,
  items: [
    {
      id: uuidv4(),
      webAddress: "https://www.youtube.com/watch?v=0cWUirJAero",
    },
    {
      id: uuidv4(),
      webAddress: "https://www.youtube.com/watch?v=-hccmVy0Ad4",
    },
    {
      id: uuidv4(),
      webAddress: "https://www.youtube.com/watch?v=0cWUirJAero",
    },
    {
      id: uuidv4(),
      webAddress: "https://www.youtube.com/watch?v=-hccmVy0Ad4",
    },
  ],
};

export default realityCaptureCarouselItems;
