import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {NavBar} from '../components/ui/NavBar'
import { LAScreen } from '../components/lakers/LAScreen';
import { PlayerScreen } from '../components/players/PlayerScreen';
import { BullsScreen } from '../components/bulls/BullsScreen';

export const DashboardRoutes = () => {
    return (
        <>
          <NavBar/>
          <div>
              <Switch>
                  <Route exact path="/lakers" component={LAScreen}></Route>
                  <Route exact path="/player/:playerId" component={PlayerScreen}></Route>
                  <Route exact path="/bulls" component={BullsScreen}></Route>
                  <Redirect to="/lakers"/>
              </Switch>
          </div>
        </>
    )
}
