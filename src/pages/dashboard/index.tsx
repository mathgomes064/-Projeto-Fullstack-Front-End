import { Cars } from "../../components/Cars"
import { DashboardPage } from "./style"
import { ProductCardAuction } from "../../components/ProductCardAuction"

export const Dashboard = () =>{
    return(

        <DashboardPage>
            <Cars/>
            <ProductCardAuction/>
        </DashboardPage>
    )
}