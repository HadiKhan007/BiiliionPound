export {appImages, appIcons, appLogos, appSvgs, appJSON} from './theme/assets';

export {colors} from './theme/colors';
export {size, family, appRadius} from './theme/sizes';
export {spacing} from './theme/spacing';
export {
  WP,
  HP,
  RF,
  scrHeight,
  scrWidth,
  platformOrientedCode,
} from './theme/responsive';

export {
  LoginVS,
  loginFormFields,
  signupFormFields,
  SignUpVS,
  forgotFormFields,
  ForgotPasswordVS,
  resetFormFields,
  ResetPasswordVS,
  updateFormFields,
  UpdateVS,
  AddNewExerciseVS,
  AddNewExerciseFormFields,
} from './utilities/validations';
export {
  StatusBarHeight,
  DimensionsWindowHeight,
  DimensionsWindowWidth,
} from './theme/statusBarHeight';

export {setupAxios, HTTP_CLIENT, initialConfig} from './utilities/config';
export {BASE_URL, ENDPOINTS} from './utilities/endpoints';
export {
  ANDROID,
  IOS,
  emailRegex,
  web_client_id,
  filterBody,
  filterCategory,
  image_options,
  period_list,
  profile_uri,
  filterTeam,
  stripe_publishableKey,
  eventDetail_list,
} from './utilities/constant';
export {header, authHeader} from './utilities/headers';
export {
  checkConnected,
  capitalizeFirstLetter,
  responseValidator,
  checkBrand,
  calculateDateDiff,
  checkExerciseItemOrder,
  convertNumberSystem,
  calculateCurrentDateDiff,
} from './utilities/helper';
export {onGoogleLogin, onAppleLogin} from './utilities/socialLogin';
