import React from 'react';
import { Switch } from 'react-router-dom';

import Curso from '~/pages/Curso';
import CreateClass from '~/pages/Curso/CreateClass';
import CreateCourse from '~/pages/Curso/CreateCourse';
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

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/instructor" component={Instructor} isPrivate />
      <Route path="/course/create" exact component={CreateCourse} isPrivate />
      <Route path="/course/:id" exact component={Curso} isPrivate />
      <Route
        path="/course/:id/lesson"
        exact
        component={CreateClass}
        isPrivate
      />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
