import { withAuthenticator } from 'aws-amplify-react';

const Portal = () => {
  return `<div>Hello</div>`;
};

export default withAuthenticator(Portal);
