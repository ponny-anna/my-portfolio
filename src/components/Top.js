import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderTop: "solid 2px black",
    borderBottom: "solid 2px black"
  }
}

class Top extends Component {

  render () {

    const {classes} = this.props

    return (
      <div className={classes.content}>
        <h1>PonnyAnnaのポートフォリオへようこそ</h1>
      </div>
    )
  }
}

export default withStyles(styles)(Top)