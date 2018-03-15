import { withAuthenticator } from 'aws-amplify-react';
import * as React from 'react';

import { Link, Route } from 'react-router-dom';
import Info from '../routes/info';

const Portal = ({ match }) => {
  return (
    <div>
      <Link to={match.url + '/settings'}>Settings</Link>
      <Link to={match.url + '/plants'}>Plants</Link>

      <Route path={match.url + '/settings'} component={Info} />
      <Route path={match.url + '/plants'} component={Info} />
    </div>
  );
};

export default withAuthenticator(Portal);
