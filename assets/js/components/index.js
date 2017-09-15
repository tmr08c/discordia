import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import Lobby from './Lobby'
import Game from './Game'

class Index extends React.Component {
  render() {
    switch (this.props.status) {
      case "logged":
        return <Lobby />
      case "started":
        return <Game />
      default:
        return <Login />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.login.status
  }
}

export default connect(mapStateToProps)(Index)
