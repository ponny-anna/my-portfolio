import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Tab, Typography } from '@material-ui/core'

const styles = {
  grow: {
    flexGrow: 1,
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
            <Tab label="About" />
            <Tab label="Carried" />
            <Tab label="Skill" />
            <Tab label="Contact" />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)