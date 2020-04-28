import { takeLatest, call, put, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import api from '~/services/api';
import history from '~/services/history';
import themes from '~/styles/themes/light';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, provider, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      provider,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));

    Swal.fire({
      title: `Perfil atualizado com sucesso!`,
      icon: 'success',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        history.push('/dashboard');
      }
    });
  } catch (err) {
    Swal.fire({
      title: `Ocorreu um erro no cadastro.`,
      text: err.response.data.error,
      icon: 'error',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        put(updateProfileFailure());
      }
    });
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
