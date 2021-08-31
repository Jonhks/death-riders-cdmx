import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { RUTAS } from './utils/constants';

import Splash from './components/Splash';

const App = () => {

 

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={RUTAS.inicio}>
            <Splash />
          </Route>
          <Route exact path={RUTAS.perfil}>
            perfil
          </Route>
          <Route exact path={RUTAS.registro}>
            registro
          </Route>
          <Route exact path={RUTAS.miembros}>
            miembros
          </Route>
          <Route exact path={RUTAS.reglamento}>
          reglamento
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
