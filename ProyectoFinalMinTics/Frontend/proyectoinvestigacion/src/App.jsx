/* eslint-disable */
import React from 'react';
import './styles/styles.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin/Index';
import RegistroUsuario from './pages/Admin/RegistroUsuario';
import RegistroProyecto from './pages/Admin/RegistroProyecto';
import Index from './pages/Index';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';


function App() {
  return (
    <div className="App container mt-5">
      <Router>
        <Switch>

          <Route path={['/admin', '/admin/registrousuario', '/admin/registroproyecto']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/registrousuario' component={RegistroUsuario}>
                  <RegistroUsuario />
                </Route>
                <Route path='/admin/registroproyecto' component={RegistroProyecto}>
                  <RegistroProyecto />
                </Route>
                <Route path='/admin' component={Admin}>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>

          <Route path={['/login', '/user', '/project']}>
            <AuthLayout>
              <Switch>
                <Route path='/login' component={Login}>
                  <Login />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>

          <Route path={['/']}>
            <PublicLayout>
              <Switch>
                <Route path='/' component={Index}>
                  <Index />
                </Route>
              </Switch>
            </PublicLayout>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
