import { Route, Switch } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"

export const RoutesMain = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Dashboard}/>
        </Switch>
    )
}