import UseCase from "../../../../base/use-case.base";
import IProductRepository from "../../Iproducts.repository";
import Product from "../../products.module";
import { GetAllProductDTO } from "./get-product-list.dto";

export default class GetProductListUseCase
implements UseCase<Product[]> {
	constructor(private productRespository: IProductRepository){}

	async execute({ page, limit, search }:GetAllProductDTO): Promise<Product[]> {
		console.log({ page, limit, search });

		return await this.productRespository.getAll(limit, limit * (page - 1), search)
	}															//1 * (1 - 0)
}