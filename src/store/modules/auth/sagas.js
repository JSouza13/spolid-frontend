import { takeLatest, call, put, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import api from '~/services/api';
import history from '~/services/history';
import themes from '~/styles/themes/light';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    Swal.fire({
      title: `Ocorreu um erro na autenticação.`,
      text: err.response.data.error,
      icon: 'error',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    });

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: false,
    });

    Swal.fire({
      title: `Cadastro efetuado com sucesso!`,
      icon: 'success',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        history.push('/logon');
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
        put(signFailure());
      }
    });
  }
}

export function* Forgot({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'forgot_password', {
      email,
    });

    Swal.fire({
      title: `Quase lá, dê uma checada em seu e-mail`,
      icon: 'success',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        history.push('/logon');
      }
    });
  } catch (err) {
    Swal.fire({
      title: `Ocorreu um erro no envio.`,
      text: err.response.data.error,
      icon: 'error',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        put(signFailure());
      }
    });
  }
}

export function* Reset({ payload }) {
  try {
    const { tokenTemp, password, confirmPassword } = payload;

    yield call(api.post, 'reset_password', {
      tokenTemp,
      password,
      confirmPassword,
    });

    Swal.fire({
      title: `Senha alterada com sucesso!`,
      icon: 'success',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        history.push('/logon');
      }
    });
  } catch (err) {
    Swal.fire({
      title: `Ocorreu um erro na alteração`,
      text: err.response.data.error,
      icon: 'error',
      confirmButtonColor: themes.color.primary,
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        put(signFailure());
      }
    });
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/FORGOT_REQUEST', Forgot),
  takeLatest('@auth/RESET_REQUEST', Reset),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
