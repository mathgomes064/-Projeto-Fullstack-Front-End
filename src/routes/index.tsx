import { Route, Switch } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"

import { Product } from "../pages/product"
import { UserPage } from "../pages/userPage"


export const RoutesMain = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/product" component={Product}/>
            <Route exact path="/user" component={UserPage}/>
        </Switch>
    )
}