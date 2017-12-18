
import { GET_USER } from '../constants/ActionTypes'


const initialState = {
  userList: []
}

const get_user = (state, data) => {
  return Object.assign({}, state, { 
    userList: data
  })
}

export default function user (state = initialState, action) {
  const {type, data} = action
  switch (type) {
    case 'GET_USER':
      return get_user(state, data)
    default:
      return state
  }
}
