import * as React from 'react';
import './App.css';

import Info from './routes/info';
import Portal from './routes/portal';

import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import AppReducer from './reducers';

import { Link, Route } from 'react-router-dom';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const store = createStore(AppReducer);
const uri = 'http://localhost:4200/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Link to="/portal">Log into the portal</Link>
            <Link to="/info">Info</Link>

            <Route exact path="/" component={Info} />
            <Route path="/portal" component={Portal} />
          </div>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
