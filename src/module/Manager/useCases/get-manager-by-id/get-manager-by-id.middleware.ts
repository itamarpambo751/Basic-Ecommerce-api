import * as yup from "yup"
import { validateSchema } from "../../../../helpers/ensure-request-datas.helper";

class Params { id: string }

const getManagerByIdMiddleware = validateSchema(getSchema => ({
	params: getSchema<Params>(
		yup.object().shape({
			id: yup.string().required("O parâmetro ´id´ é obrigatório.")
		})
	)
}))

export default getManagerByIdMiddleware