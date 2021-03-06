import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'
import AllClients from '/client/imports/AdminComponents/AllClients'
import SingleClient from '/client/imports/AdminComponents/SingleClient'

const Clients = props => (
  <Switch>
    <Route exact path="/admin/clients" component={ AllClients }/>
    <Route exact path="/admin/clients/:username" component={ SingleClient } />
  </Switch>
)
export default Clients
