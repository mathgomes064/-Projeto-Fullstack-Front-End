import { Route, Switch } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { Product } from "../pages/product"

export const RoutesMain = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/product" component={Product}/>

        </Switch>
    )
}