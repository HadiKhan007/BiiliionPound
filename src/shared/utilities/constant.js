const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';
const filterBody = [
  {id: 1, title: 'Core', tick: false},
  {id: 2, title: 'Back', tick: false},
  {id: 3, title: 'Arms', tick: false},
  {id: 4, title: 'Shoulders', tick: false},
  {id: 5, title: 'Chest', tick: false},
  {id: 6, title: 'Legs', tick: false},
  {id: 7, title: 'Full Body', tick: false},
  {id: 8, title: 'Olympic', tick: false},
  {id: 9, title: 'Other', tick: false},
];
const filterCategory = [
  {id: 1, title: 'Barbell', tick: false},
  {id: 2, title: 'Dumbbell', tick: false},
  {id: 3, title: 'Machine/Other', tick: false},
  {id: 4, title: 'Weighted bodyweight', tick: false},
  {id: 5, title: 'Assisted body', tick: false},
  {id: 6, title: 'Raps only', tick: false},
  {id: 7, title: 'Cardio exercise', tick: false},
  {id: 8, title: 'Duration', tick: false},
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
export {
  ANDROID,
  IOS,
  emailRegex,
  web_client_id,
  filterBody,
  filterCategory,
  swipe_config,
  image_options,
};
