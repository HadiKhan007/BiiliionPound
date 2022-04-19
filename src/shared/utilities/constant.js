import {appIcons} from '../exporter';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';
export const video_url =
  'https://billionpound.s3.us-west-2.amazonaws.com/Public/walk_through.mp4';
const filterBody = [
  {id: 1, title: 'Core', tick: false, key: 'core'},
  {id: 2, title: 'Back', tick: false, key: 'back'},
  {id: 3, title: 'Arms', tick: false, key: 'arms'},
  {id: 4, title: 'Shoulders', tick: false, key: 'shoulders'},
  {id: 5, title: 'Chest', tick: false, key: 'chest'},
  {id: 6, title: 'Legs', tick: false, key: 'legs'},
  {id: 7, title: 'Full Body', tick: false, key: 'full_body'},
  {id: 8, title: 'Olympic', tick: false, key: 'olympic'},
  {id: 9, title: 'Cardio', tick: false, key: 'cardio'},
  {id: 10, title: 'Other', tick: false, key: 'other'},
];
const filterCategory = [
  {id: 1, title: 'Barbell', tick: false, key: 'barbell'},
  {id: 2, title: 'Dumbbell', tick: false, key: 'dumbbell'},
  {id: 3, title: 'Machine/Other', tick: false, key: 'machine'},
  {id: 4, title: 'Weighted bodyweight', tick: false, key: 'weight_bodyweight'},
  {id: 5, title: 'Assisted body', tick: false, key: 'assisted_body'},
  {id: 6, title: 'Raps only', tick: false, key: 'reps_only'},
  {id: 7, title: 'Cardio exercise', tick: false, key: 'cardio_exercise'},
  {id: 8, title: 'Duration', tick: false, key: 'duration'},
  // {id: 9, title: 'None', tick: false},
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
    key: 'day',
  },
  {
    id: 1,
    title: 'Weekly',
    status: false,
    key: 'week',
  },
  {
    id: 2,
    title: 'Monthly',
    status: false,
    key: 'month',
  },
  {
    id: 3,
    title: 'Yearly',
    status: false,
    key: 'year',
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
const profile_uri =
  'https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png';
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
