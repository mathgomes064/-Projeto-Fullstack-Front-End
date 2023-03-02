import { Route, Switch } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"

import { Product } from "../pages/product"
import { UserPage } from "../pages/userPage"

import { Login } from "../pages/login"

export const RoutesMain = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/product/:id" component={Product}/>
            <Route exact path="/user" component={UserPage}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    )
}