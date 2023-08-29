import UseCase from "../../../../base/use-case.base";
import IRestaurantRepository from "../../Irestaurant.repository";
import Restaurant from "../../restaurant.module";
import { GetAllRestaurantsDTO } from "./get-restaurant-list.dto";

export default class GetRestaurantListUseCase
implements UseCase<Restaurant[]> {
	constructor(private restaurantRespository: IRestaurantRepository){}

	async execute({ page, limit, search }:GetAllRestaurantsDTO): Promise<Restaurant[]> {
		console.log({ page, limit, search });

		return await this.restaurantRespository.getAll(limit, limit * (page - 1), search)
	}															//1 * (1 - 0)
}