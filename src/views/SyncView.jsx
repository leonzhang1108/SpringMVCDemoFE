import React from 'react'
import fetch from 'util/fetch'
class SyncView extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    fetch.get('/api/user/showUser').then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <p>
        I'm Sync View.
      </p>
    )
  }
}

export default SyncView
