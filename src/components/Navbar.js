import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Tab, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
  grow: {
    flexGrow: 1,
  },
  link: {
    fontSize: "18px",
    fontWeight: "bold"
  }
}

class Navbar extends Component {
  render() {

    const {classes} = this.props

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.grow}>Ponny Anna Portfolio</Typography>
            <Link to="/"><Tab label={<span className={classes.link}>Top</span>} /></Link>
            <Link to="/profile"><Tab label={<span className={classes.link}>Profile</span>} /></Link>
            <Link to="/skill"><Tab label={<span className={classes.link}>Skill</span>} /></Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)