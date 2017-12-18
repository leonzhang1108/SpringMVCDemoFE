import React from 'react'
import fetch from 'util/fetch'
import './SyncView.css'
class SyncView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userList: []
    }
  }
  componentDidMount = () => {
    fetch.get('/api/user/showUser').then(res => {
      this.setState({
        userList: res
      })
    })
  }
  render() {
    return (
      <div>
        <p>
          I'm Sync View.
        </p>
        {
          this.state.userList.map((item, index) => <div className="user-list-item" key={index}>{item.name}</div>)
        }
      </div>
    )
  }
}

export default SyncView
