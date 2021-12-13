import { useState } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  HashRouter,
  Route
} from "react-router-dom";
import { RUTAS } from './utils/constants';

import Splash from './components/Splash';
import Login from './components/Login';
import Miembros from './components/Miembros';
import Perfil from './components/Perfil';
import Registro from './components/Registro';
import Reglamento from './components/Reglamento';
import Error404 from './components/Error404';

const App = () => {

  const [errorLogin, setErrorLogin] = useState(false);


  const checkUser = user => {
    const email = user.email;
    const password = user.password;
    if(email === 'correo@correo.com' && password === '123123'){
      window.location.hash = '/miembros';
      setErrorLogin(false)
    }else  {
      setErrorLogin(true)
      setTimeout(()=> setErrorLogin(false) ,2000)
    }

    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //   // Handle Errors here.
    //   // var errorCode = error.code;
    //   // var errorMessage = error.message;
    //   // ...
    // })
  }

  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     console.log(user)
  //     // setUserFirebase(user)
  //     // User is signed in.
  //   } else {
  //     console.log(user)
  //     // No user is signed in.
  //   }
  // });

  return (
    <HashRouter basename='/'>
      <div>
        <Switch>
          <Route exact path={RUTAS.inicio}>
            <Splash />
          </Route>
          <Route exact path={RUTAS.login}>
            <Login checkUser={checkUser} errorLogin={errorLogin} />
          </Route>
          <Route exact path={RUTAS.miembros}>
            <Miembros />
          </Route>
          <Route exact path={RUTAS.perfil}>
            <Perfil />
          </Route>
          <Route exact path={RUTAS.registro}>
            <Registro />
          </Route>
          <Route exact path={RUTAS.reglamento}>
          <Reglamento />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
