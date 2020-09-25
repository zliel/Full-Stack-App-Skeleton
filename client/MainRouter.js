import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'

const MainRouter = () => {
    //Each Route component will have a path to a different view
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/users" component={Users} />
            </Switch>
        </div>
    )
}

export default MainRouter