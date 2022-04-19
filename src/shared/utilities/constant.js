import {appIcons} from '../exporter';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';
export const video_url =
  'https://billionpound.s3.us-west-2.amazonaws.com/Public/Billion%20Pound%20App%20ReDo.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCmFwLXNvdXRoLTEiSDBGAiEA1eLc%2FW7pE9toj%2B%2BcKORrjUMrOXsZm5qGoIqKBaNcHFoCIQDYYpUgonEAgO89XeGGNHSjR%2BhW4Tkhtlz610o%2BLaK4DyqEAwjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAQaDDcyNzA5NzQ2Mzc1NiIMcznP%2BS1e6efpMre2KtgCCllw69IXXpjnbrWXr5SRPnQfF84rH0WNY4KuLGPebAQWAwr1%2FdyCUXK8hvk7%2BtRlzQ4oml7jp3cswCezibjXC9R7ntVsQnnYU%2BV4Pd9YRj4khTQNH3EYeKXtOcd5sjN9ouxA7G%2FNfJQbi6ZC3niwzbwu1OH%2BFG3VSxoZuAw0%2BLsPTXBjjz8oU1OkHF7uL3CRQX7QmY1xCxZlcr%2BcMphdgak7E8ItCc1JB8%2FymUdF%2F88%2Fk3Nvn7NQTE%2Bi8m2%2Fb7c3xGSLildoEPhcbggFPTKIZ96UgWwoiXn7DBylN%2Bpiwef6MR7YdvMFyo6YmGiZZ0LvpFgLER8lvSKFt1dK9tRJ%2FUJzAThILEHbRH68Jo2fwkIu4R7MLzlmPHFFZMBaVZv9i1CiGpGWQhMf5ERbTnOMvzLGp0jC1QpbZJ3xJP8YtNB9ssuAd3bs5zhZ%2FueKRWU81MHDxp54X8Ewqqf5kgY6sgLP%2BR6jzxZMp5zty%2BlEpo6p9%2FlnaUXdnzy8VYbNk%2F4X9RoGZjiBR1KqeI2SKB5%2BCSNAt%2FkyQIfhwHKSZgT%2B1eQeUE2LYKBlGNy6TIc5eYZNIkunNzpau6J3BQSNm1KLPQWYwSItAW4VQJlDaUVC3W2OVP7OUjcM%2BAFvS4G6xgfcxkMszWn6fhaI7c17ZocXPVg6%2BdqU51sfAZCn3d%2FXHtL2go%2Bkf3WvAO1uFvEkEbhhDaJKOQ4GaAEAHw%2BG7et7F9llwKOx%2Fs5y7mWigKpAPtFCwyZsGaN7HIHb1XvA4uSvcIqIugot09Qu%2BPOp3%2F5hB%2FfZ8Xpl65rnxIbWCqQN3MSRvfOCY0R17OYh%2FkQ7w1DEBP%2FvhOhQdGJ9vMJhjLB7vS07jVqU3JzUBOKmRHdJwRpGo1k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220419T095739Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2SSTC2PGEBC734HL%2F20220419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e54cdc78b592ed7fd9c9c2c9613ac2a0375d5494c0400afc95125336cfb3d27e';
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
