export function createRequest(data) {
  return {
    type: '@course/CREATE_REQUEST',
    payload: { data },
  };
}

export function createSuccess(course) {
  return {
    type: '@course/CREATE_SUCCESS',
    payload: { course },
  };
}

export function createFailure() {
  return {
    type: '@course/CREATE_FAILURE',
  };
}
