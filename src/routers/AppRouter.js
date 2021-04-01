import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
  
    
  } from "react-router-dom";
import { ProtfolioPage } from '../pages/PortfolioPage/ProtfolioPage';


export const AppRouter = () => {
    return (
    <BrowserRouter >
        <div>
            <Switch>
                <Route path="/" render={(props) => <ProtfolioPage {...props} />}/>
                <Redirect from="/" to="/" />
            </Switch>
        </div>
    </BrowserRouter>
    )
}
