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
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
          <NavBar/>
          <div className="ml-5 mt-5">
              <Switch>
                  <Route exact path="/lakers" component={LAScreen}></Route>
                  <Route exact path="/bulls" component={BullsScreen}></Route>
                  <Route exact path="/player/:playerId" component={PlayerScreen}></Route>
                  <Route exact path="/search" component={SearchScreen}></Route>
                  <Redirect to="/lakers"/>
              </Switch>
          </div>
        </>
    )
}
