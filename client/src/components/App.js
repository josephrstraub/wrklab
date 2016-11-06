import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData, changeActiveList, changeActiveListIndex, changeActiveSubIndex, toggleModal, updatePreviousPath } from '../actions'
import Header from './Header'
import { Grid } from 'react-bootstrap'

const mapStateToProps = (state) => {
  return {
    mainMenu: state.mainMenu,
    processes: state.processes,
    featuredProjects: state.featuredProjects,
    products: state.products,
    activeProcess: state.activeProcess,
    visions: state.visions,
    activeListIndex: state.activeListIndex,
    activeSubIndex: state.activeSubIndex,
    showModal: state.showModal,
    previousPath: state.previousPath
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (dataType) => {
      dispatch(getData(dataType))
    },
    changeActiveList: (newList) => {
      dispatch(changeActiveList(newList))
    },
    changeActiveListIndex: (newIndex) => {
      dispatch(changeActiveListIndex(newIndex))
    },
    changeActiveSubIndex: (newIndex) => {
      dispatch(changeActiveSubIndex(newIndex))
    },
    toggleModal: () => {
      dispatch(toggleModal())
    },
    updatePreviousPath: (path) => {
      dispatch(updatePreviousPath(path))
    }
  }
}

let backgroundColors = ["#4F1452", "#19234D", "#660033", "#212801", "#19234D", "#242424", "#003F52"]

class App extends Component {
  componentWillMount() {
    this.props.getData("processes")
    this.props.getData("visions")
    this.props.getData("featuredProjects")
    this.props.getData("products")
    let filter = this.props.params.filter
    let listTypes = {
      process: 'processes',
      vision: 'visions',
      featured: 'featuredProjects'
    }
    let activeList = listTypes[filter]
    this.props.changeActiveList(activeList)
  }
  render() {
    let filter = this.props.params.filter
    let backgroundColor = filter === 'process' ? backgroundColors[this.props.activeListIndex] : "white"
    return (
      <div id="main-container" style={{backgroundColor}}>
          {React.cloneElement(this.props.children, {...this.props})}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
