import { processes } from '../mock/processes.json'
import { visions } from '../mock/visions.json'
import { featuredProjects } from '../mock/featured-projects.json'
import axios from 'axios'

function camelCaseToDash( myStr ) {
    return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

export const getData = (dataType) => {
  let dashedWord = camelCaseToDash(dataType)
  return axios.get(`/api/${dashedWord}`)
    .then(response => ({
      type: 'RECEIVE_DATA',
      dataType,
      data: response.data
    }))
}

export const changeActiveList = (newList = []) => ({
  type: 'CHANGE_ACTIVE_LIST',
  newList
})

export const changeActiveListIndex = (newIndex) => ({
  type: 'CHANGE_ACTIVE_LIST_INDEX',
  newIndex
})

export const changeActiveSubIndex = (newIndex) => ({
  type: 'CHANGE_ACTIVE_SUB_INDEX',
  newIndex
})

export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
})

export const updatePreviousPath = (path) => ({
  type: 'UPDATE_PREVIOUS_PATH',
  path
})
