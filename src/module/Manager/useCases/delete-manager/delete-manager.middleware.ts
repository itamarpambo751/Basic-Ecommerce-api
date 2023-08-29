import * as yup from "yup"
import { validateSchema } from "../../../../helpers/ensure-request-datas.helper"
import DeleteManagerDTO from "./delete-manager.dto"

class Params extends DeleteManagerDTO {}

const deleteManagerMiddleware = validateSchema(getSchema =>( {
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string().uuid()
        })
    )
}))
export default deleteManagerMiddleware