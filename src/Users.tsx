import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UserDetails from './UserDetails';
import UsersList from './UsersList';

const Users: React.FC = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:userId`}
             component={UserDetails} />
      <Route path={match.path}
             exact
             component={UsersList} />
    </Switch>
  );
};

Users.displayName = 'Users';

export default Users;
