import { Router } from "express";
import RestaurantRoutes from "../module/Restaurant/restaurant.routes";
import managerRoutes from "../module/Manager/manager.routes";
import ProductRoutes from "../module/Products/products.routes";

const Routes = Router()

Routes.use(RestaurantRoutes)
Routes.use(managerRoutes)
Routes.use(ProductRoutes)


export default Routes