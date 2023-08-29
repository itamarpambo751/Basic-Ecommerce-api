import * as yup from "yup"
import GetRestaurantByIdDTO from "./get-restaurant-by-id.dto"
import { validateSchema } from "../../../../helpers/ensure-request-datas.helper"

class Params extends GetRestaurantByIdDTO {}

const getRestaurantByIdMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid()
        })
    )
}))
export default getRestaurantByIdMiddleware