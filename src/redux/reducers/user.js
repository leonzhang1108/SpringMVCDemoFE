
import { GET_USER } from '../constants/ActionTypes'


const initialState = {
  userList: []
}

const get_user = () => {
  return { 
    userList: [{
      name: 'leon'
    }] 
  }
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return get_user()
    default:
      return state
  }
}
