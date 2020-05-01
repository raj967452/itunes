import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/home';
import Loader from './components/loader';

import './App.scss';

const App = () => (
  <div className="App">
    <React.Suspense fallback={<Loader />}>
      <Route exact path="/" component={Home} />
    </React.Suspense>
  </div>
);

export default App;
