import { takeLatest, call, put, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import api from '~/services/api';
import history from '~/services/history';
import themes from '~/styles/themes/light';

import { createSuccess, createFailure } from './actions';

export function* create({ payload }) {
  try {
    const {
      provider_id,
      title,
      description,
      value,
      image_id,
      video_id,
    } = payload.data;

    const response = yield call(api.post, 'courses', {
      provider_id,
      title,
      description,
      value,
      image_id,
      video_id,
    });

    yield put(createSuccess(response.data));

    history.push('/dashboard');
  } catch (err) {
    Swal.fire({
      title: `Ocorreu um erro na autenticação.`,
      text: err.response.data.error,
      icon: 'error',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    });

    yield put(createFailure());
  }
}

export default all([takeLatest('@course/CREATE_REQUEST', create)]);
