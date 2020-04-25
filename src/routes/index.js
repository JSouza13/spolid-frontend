import React from 'react';
import { Switch } from 'react-router-dom';

import Curso from '~/pages/Curso';
import Dashboard from '~/pages/Dashboard';
import ForgotPassword from '~/pages/ForgotPassword';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import ResetPassword from '~/pages/ResetPassword';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/logon" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/reset/:tokenTemp" component={ResetPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/curso/1" component={Curso} isPrivate />
    </Switch>
  );
}
