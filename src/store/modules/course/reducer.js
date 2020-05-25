import produce from 'immer';

const INITIAL_STATE = {
  course: null,
  loading: false,
};

export default function course(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@course/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@course/CREATE_SUCCESS': {
        draft.course = action.payload.course;
        draft.loading = false;
        break;
      }
      case '@course/CREATE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
