import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
}

class Profile extends Component {

  render () {

    const {classes} = this.props

    return (
      <div className={classes.content}>
        <table>
          <tr>
            <th>ネットで使用している名前</th>
            <td>PonnyAnna</td>
          </tr>
          <tr>
            <th>年齢</th>
            <td>25</td>
          </tr>
          <tr>
            <th>性別</th>
            <td>男</td>
          </tr>
          <tr>
            <th>GitHub</th>
            <td><a href="https://github.com/ponny-anna/">ponny-anna</a></td>
          </tr>
          <tr>
            <th>Blog</th>
            <td><a href="https://ponny-anna.hateblo.jp/">Cute is better than ugly.</a></td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>ponny.anna77@gmail.com</td>
          </tr>
          <tr>
            <th>趣味</th>
            <td>アニメ/アイマス</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default withStyles(styles)(Profile)