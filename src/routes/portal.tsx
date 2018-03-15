import { withAuthenticator } from 'aws-amplify-react';
import * as React from 'react';

import { NavLink, Route } from 'react-router-dom';
import Info from './info';

const Portal = ({ match }) => {
  return (
    <div>
      <NavLink activeClassName="is-active" to={match.url + '/settings'}>
        Settings
      </NavLink>
      <NavLink activeClassName="is-active" to={match.url + '/plants'}>
        Plants
      </NavLink>

      <Route path={match.url + '/settings'} component={Info} />
      <Route path={match.url + '/plants'} component={Info} />
    </div>
  );
};

export default withAuthenticator(Portal);
