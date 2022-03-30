import {appIcons} from '../exporter';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';
const filterBody = [
  {id: 1, title: 'Core', tick: true},
  {id: 2, title: 'Back', tick: false},
  {id: 3, title: 'Arms', tick: false},
  {id: 4, title: 'Shoulders', tick: false},
  {id: 5, title: 'Chest', tick: false},
  {id: 6, title: 'Legs', tick: false},
  {id: 7, title: 'Full Body', tick: false},
  {id: 8, title: 'Olympic', tick: false},
  {id: 9, title: 'Other', tick: false},
  {id: 10, title: 'None', tick: false},
];
const filterCategory = [
  {id: 1, title: 'Barbell', tick: true},
  {id: 2, title: 'Dumbbell', tick: false},
  {id: 3, title: 'Machine/Other', tick: false},
  {id: 4, title: 'Weighted bodyweight', tick: false},
  {id: 5, title: 'Assisted body', tick: false},
  {id: 6, title: 'Raps only', tick: false},
  {id: 7, title: 'Cardio exercise', tick: false},
  {id: 8, title: 'Duration', tick: false},
  {id: 9, title: 'None', tick: false},
];
const filterTeam = [
  {id: 1, title: 'Team Red', tick: false},
  {id: 2, title: 'Team Black', tick: false},
  {id: 3, title: 'Team Yellow', tick: false},
  {id: 4, title: 'Team Pink', tick: false},
  {id: 5, title: 'Team Orange', tick: false},
  {id: 6, title: 'Team White', tick: false},
  {id: 7, title: 'Cardio exercise', tick: false},
  {id: 8, title: 'Team Blue', tick: false},
  {id: 9, title: 'None', tick: false},
];
const eventDetail_list = [
  {
    icon: appIcons.calender,
  },
  {
    icon: appIcons.badge,
  },
  {
    icon: appIcons.tag,
  },
  {
    icon: appIcons.peoples,
  },
];
const period_list = [
  {
    id: 0,
    title: 'Today',
    status: false,
  },
  {
    id: 1,
    title: 'Weekly',
    status: false,
  },
  {
    id: 2,
    title: 'Monthly',
    status: false,
  },
  {
    id: 3,
    title: 'Yearly',
    status: false,
  },
];
const swipe_config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};
let image_options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const stripe_publishableKey =
  'pk_test_51Jc5CWG5H9PTsJWTIZhYvdTTYfou0YKpZcDRJemqk83fnHQfRJoJJiHLK8AioyjhRa1XYAW9Q0NggRgAIumEaUgj00g64wGpS3';
const profile_uri = 'https://unsplash.it/400/400?image=1';
export {
  ANDROID,
  IOS,
  emailRegex,
  web_client_id,
  filterBody,
  filterCategory,
  swipe_config,
  image_options,
  period_list,
  profile_uri,
  filterTeam,
  stripe_publishableKey,
  eventDetail_list,
};
