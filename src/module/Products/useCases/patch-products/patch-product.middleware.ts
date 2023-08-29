import * as yup from "yup"
import { validateSchema } from "../../../../helpers/ensure-request-datas.helper"
import PatchProductDTO from "./patch-product.dto"

interface Params { id: string }
interface Body extends Omit<PatchProductDTO, 'id'> {}

const patchProductMiddleware = validateSchema(getSchema => ({
    params: getSchema<Params>(
        yup.object().shape({
            id: yup.string()
				.uuid()
				.required("O ´id´ é um valor obrigatório para se fazer a atalização")
        })
    ),
	body: getSchema<Body>(
		yup.object().shape({
			name: yup.string().notRequired().min(6, "´name´ deve ter pelo menos 6 caracteres"),
			image_url: yup.string().notRequired(),
			price: yup.number().notRequired(),
			description: yup.string().notRequired()
		})
	)
}))
export default patchProductMiddleware