import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  lifted_weight: null,
  exercise: null,
  filtered_exercises: [],
  categoryFilteredArray: [],
  bodyFilteredArray: [],
  selected_bodyPart: {},
  selected_category: {},

  all_exercise: [],
  exercise_screen: false,
  exercise_item: null,
  create_exercise_workout: null,
  recent_searches: [],
};
const exerciseReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************GET LIFTED WEIGHT Sates*************
    case TYPES.GET_LIFTED_WEIGHT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        lifted_weight: payload,
      };

    case TYPES.GET_LIFTED_WEIGHT_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        lifted_weight: null,
      };
    //************Filtered Exercise Sates*************
    case TYPES.SET_FILTERED_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        filtered_exercises: payload,
      };

    //************ Exercise Sates*************
    case TYPES.GET_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        all_exercise: payload,
      };

    case TYPES.GET_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        all_exercise: state?.all_exercise,
      };

    //************ Exercise Sates*************
    case TYPES.GET_FILTERED_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        all_exercise: payload,
      };

    case TYPES.GET_FILTERED_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        all_exercise: null,
      };

    //************Create Exercise Sates*************
    case TYPES.CREATE_EXERCISE_WORKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        create_exercise_workout: payload,
      };

    case TYPES.CREATE_EXERCISE_WORKOUT_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        create_exercise_workout: null,
      };

    //************Filtered Exercise Sates*************
    case TYPES.SET_CATEGORY_FILTERED_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryFilteredArray: payload,
      };
    //Selected Filtered
    case TYPES.SET_BODY_FILTERED_SUCCESS:
      return {
        ...state,
        loading: false,
        bodyFilteredArray: payload,
      };

    case TYPES.SELECT_CATEGORY_FILTER_SUCCESS:
      // state.categoryFilteredArray[payload].tick =
      //   !state.categoryFilteredArray[payload].tick;
      return {
        ...state,
        loading: false,
        selected_category: payload,
      };

    case TYPES.SELECT_BODY_FILTER_SUCCESS:
      // state.bodyFilteredArray[payload].tick =
      //   !state.bodyFilteredArray[payload].tick;
      return {
        ...state,
        loading: false,
        selected_bodyPart: payload,
      };
    //************Custom Exercise*************
    case TYPES.CUSTOM_EXERCISE_SUCCESS:
      return {
        ...state,
        exercise: payload,
      };

    case TYPES.SET_EXERCISE_SCREEN:
      return {
        ...state,
        exercise_screen: payload,
      };
    case TYPES.SET_EXERCISE_ITEM_SUCCESS:
      return {
        ...state,
        exercise_item: payload,
      };
    case TYPES.SET_RECENT_SEARCHES_SUCCESS:
      return {
        ...state,
        recent_searches: payload,
      };
    default:
      return state;
  }
};
export default exerciseReducer;
