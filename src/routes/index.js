import React from 'react';
import { Switch } from 'react-router-dom';

import CreateCourse from '~/pages/CreateCourse';
import Curso from '~/pages/Curso';
import Dashboard from '~/pages/Dashboard';
import ForgotPassword from '~/pages/ForgotPassword';
import Home from '~/pages/Home';
import Instructor from '~/pages/Instructor';
import NotFound from '~/pages/NotFound';
import Profile from '~/pages/Profile';
import ResetPassword from '~/pages/ResetPassword';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/logon" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/forgot" exact component={ForgotPassword} />
      <Route path="/reset/:tokenTemp" exact component={ResetPassword} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
      <Route path="/instructor" exact component={Instructor} isPrivate />
      <Route path="/course/create" exact component={CreateCourse} isPrivate />
      <Route path="/course/1" exact component={Curso} isPrivate />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
