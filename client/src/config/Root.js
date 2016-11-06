import React, { Component } from 'react'
import  { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import MainMenu from '../components/MainMenu'
import ProcessContainer from '../containers/ProcessContainer'
import VisionContainer from '../containers/VisionContainer'
import Landing from '../components/Landing'
import ProductsContainer from '../containers/ProductsContainer'
import Product from '../components/Product'
import FeaturedProjects from '../components/FeaturedProjects'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import wrklabApp from '../reducers'
import { Provider } from 'react-redux'
import App from '../components/App'
import FakeApp from '../components/FakeApp'
import Body from '../components/Body'

const logger = createLogger();

const store = createStore(
  wrklabApp,
  applyMiddleware(thunk, promise, logger)
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={FakeApp}>
            <Route path="products" component={ProductsContainer} />
            <Route path="process" component={ProcessContainer} />
            <Route path="vision" component={VisionContainer} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
