import { Route, Switch } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"

import { Product } from "../pages/product"
import { UserPage } from "../pages/userPage"

import { Login } from "../pages/login"
import { Register } from "../pages/register"

import { RecPassword } from "../pages/recPassword"

export const RoutesMain = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/product/:id" component={Product}/>
            <Route exact path="/user" component={UserPage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/recuperacao" component={RecPassword}/>
        </Switch>
    )
}