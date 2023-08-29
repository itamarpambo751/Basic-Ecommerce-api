import CreateProductsController from "./create-products.controller";
import CreateProductsUseCase from "./create-products.service";
import createProductsMiddleware from "./create-products.middleware";
import ProductsRepository from "../../products.repository";

const createProductsUseCase = new CreateProductsUseCase(
	new ProductsRepository,
	new ProductsRepository
)

const createProductsController = new CreateProductsController(createProductsUseCase)

export {
	createProductsController,
	createProductsMiddleware
}