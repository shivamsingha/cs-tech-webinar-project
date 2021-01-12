import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { Router } from '@reach/router';
import { createClient, Provider } from 'urql';
import {WebinarLogin, WebinarWatch} from '../components';

const client = createClient({
  url: '/graphql',
});

const App: React.FC = () => {
  return (
    <Provider value={client}>
      <Router basepath="/webinar">
        <WebinarLogin path="/login/:webinarId" />
        <WebinarWatch path="/:webinarId" />
      </Router>
      <h1>asdfasdf</h1>
    </Provider>
  );
};

export default App;
