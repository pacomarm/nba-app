import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from '../components/login/Login';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" component={DashboardRoutes}/>
                </Switch>
            </div>
        </Router>
    );
}

