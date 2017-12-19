import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { get_user } from '$redux/actions'
import { DatePicker } from 'antd'
import './SyncView.css'

const mapStateToProps = state => ({
  userList: state.user.userList
})

const mapDispatchToProps = dispatch => ({
  get_user: bindActionCreators(get_user, dispatch)
})

class SyncView extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount = () => {
    // 获取用户
    this.props.get_user()
  }
  render() {
    return (
      <div>
        <DatePicker />
        <p>
          I'm Sync View
        </p>
        {
          this.props.userList.map((item, index) => <div className="user-list-item" key={index}>{item.name}</div>)
        }
      </div>
    )
  }
}

SyncView.propTypes = {
  userList: PropTypes.array,
  get_user: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyncView)


