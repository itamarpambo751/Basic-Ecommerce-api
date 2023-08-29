import * as yup from "yup"
import { validateSchema } from "../../../../helpers/ensure-request-datas.helper"
import DeleteRestaurantDTO from "./delete-restaurant.dto"

class Params extends DeleteRestaurantDTO {}

const deleteRestaurantMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid()
        })
    )
}))
export default deleteRestaurantMiddleware