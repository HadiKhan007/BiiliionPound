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
  all_exercise: [],
  exercise_screen: false,
  exercise_item: null,
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
    case TYPES.GET_FILTERED_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        filtered_exercises: payload,
      };

    case TYPES.GET_FILTERED_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        filtered_exercises: null,
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
        all_exercise: null,
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
      return {
        ...state,
        loading: false,
        // categoryFilteredArray: payload,
      };

    case TYPES.SELECT_BODY_FILTER_SUCCESS:
      console.log(payload);
      return {
        ...state,
        loading: false,
        // bodyFilteredArray: payload,
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
    default:
      return state;
  }
};
export default exerciseReducer;
