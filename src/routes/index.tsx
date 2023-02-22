import { Route, Switch } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { UserPage } from "../pages/userPage"
export const RoutesMain = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/user" component={UserPage}/>
        </Switch>
    )
}