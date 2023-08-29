import UseCase from "../../../../base/use-case.base";
import CreateRestaurantDTO from "./create-products.dto";
import IRestaurantRepository from "../../Iproducts.repository";
import Product from "../../products.module";
import AppError from "../../../../typeErrors/AppError.error";
import IManagerRepository from "../../../Manager/Imanager.repository";
import CreateProductDTO from "./create-products.dto";
import IProductRepository from "../../Iproducts.repository";

export default class CreateProductUseCase
implements UseCase<AppError> {
	constructor(
		private restaurantRepository: IRestaurantRepository,
		private productRepository: IProductRepository
	) {}

	async execute({ name, image_url, price, description, restaurant_id }:CreateProductDTO):
	Promise<AppError> {
		const restaurant = new Product({ name, image_url, price, description, restaurant_id })

		const restaurantExists = await this.restaurantRepository.get(restaurant_id)

		if (!restaurantExists) return new AppError("Restaurante não encontrado.", 404)

		await this.productRepository.save(restaurant)
	}
}