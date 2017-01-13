import React, { Component } from 'react'
import  { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import { syncHistoryWithStore } from 'react-router-redux'
import ProcessContainer from '../containers/ProcessContainer'
import VisionContainer from '../containers/VisionContainer'
import LandingContainer from '../containers/LandingContainer'
import ProductsContainer from '../containers/ProductsContainer'
import ProductContainer from '../containers/ProductContainer'
import FeaturedContainer from '../containers/FeaturedContainer'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import wrklabApp from '../reducers'
import { Provider } from 'react-redux'
import App from '../components/App'

const logger = createLogger();

const store = createStore(
  wrklabApp,
  applyMiddleware(thunk, promise, logger),
  autoRehydrate()
)

persistStore(store, {blacklist: ['routing', 'modalIsVisible', 'mainMenuIsVisible']})

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={LandingContainer} />
            <Route path="products" component={null}>
              <IndexRoute component={ProductsContainer}/>
              <Route path=":productName" component={ProductContainer}/>
            </Route>
            <Route path="process" component={ProcessContainer} />
            <Route path="vision" component={VisionContainer} />
            <Route path="featured" component={FeaturedContainer} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
