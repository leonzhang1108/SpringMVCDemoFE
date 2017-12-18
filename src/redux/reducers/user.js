
import { GET_USER } from '../constants/ActionTypes'


const initialState = {
  userList: []
}

const get_user = (state) => {
  return Object.assign({}, state, { 
    userList: [{
      name: 'leon'
    }] 
  })
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return get_user(state)
    default:
      return state
  }
}
