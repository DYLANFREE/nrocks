import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { toggleDrawer } from '../redux/actions'

const LayoutContainer = props => <Layout {...props} />

const mapStateToProps = state => ({
  isDrawerOpen: state.common.isDrawerOpen,
  isOnEpisodePage: state.common.isOnEpisodePage
})

export default withRouter(
  connect(
    mapStateToProps,
    { toggleDrawer }
  )(LayoutContainer)
)
