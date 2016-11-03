import React, { Component } from 'react'
import  { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import MainMenu from '../components/MainMenu'
import Process from '../components/Process'
import Vision from '../components/Vision'
import Landing from '../components/Landing'
import Products from '../components/Products'
import Product from '../components/Product'
import FeaturedProjects from '../components/FeaturedProjects'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import App from '../components/App'

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger)
)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="main-menu" component={MainMenu}/>
            <Route path="process" component={Process}/>
            <Route path="vision" component={Vision}/>
            <Route path="products" component={Products}/>
            <Route path="product" component={Product}/>
            <Route path="featured" component={FeaturedProjects}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}
