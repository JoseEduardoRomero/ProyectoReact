import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Welcome from '../pages/Welcome';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/" component={Welcome} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
