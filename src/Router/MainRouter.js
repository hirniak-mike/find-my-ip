import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { BasicPage, FindIpPage } from '../Pages';
import { FIND_MY_IP } from '../Res/Consts/routerUrl';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={FIND_MY_IP} render={() => <BasicPage><FindIpPage /></BasicPage>} />
        <Route exact path='*' >
          <Redirect to={FIND_MY_IP} />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
