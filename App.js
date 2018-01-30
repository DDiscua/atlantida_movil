import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import devToolsEnhancer from 'remote-redux-devtools';
import routes from "./app/routing/routes";
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './app/reducers/rootReducer'
import moment from 'moment';
import 'moment/locale/es';
import {
  Switch,
  Route,
  Router,
} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import { Container } from 'native-base';
import MainLayout from './app/components/MainLayout/MainLayout';
import Login from "./app/pages/login/login";


const history = createHistory();

const enhancer = compose(
  // Middleware you want to use in development:
  composeWithDevTools(
    applyMiddleware(thunkMiddleware,logger)
  ),

  // DevTools.instrument()
)

const store = createStore(
  rootReducer,
  {},
  enhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  devToolsEnhancer({ realtime: true, port: 8081 })
)
export default class App extends React.Component {
  render() {
    return (
      <Container style={styles.container} className="primary_container">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Login} style={{ width: '100%' }} />
              <MainLayout>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                ))}
              </MainLayout>
            </Switch>
          </Router>
        </Provider>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%'
  }
});