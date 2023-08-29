import UseCase from "../../../../base/use-case.base";
import IManagerRepository from "../../Imanager.repository";
import Manager from "../../manager.module";
import { GetAllManagerDTO } from "./get-manager-list.dto";

export default class GetManagerListUseCase
implements UseCase<Manager[]> {
	constructor(private managerRespository: IManagerRepository){}

	async execute({ page, limit, search }:GetAllManagerDTO): Promise<Manager[]> {
		console.log({ page, limit, search });

		return await this.managerRespository.getAll(limit, limit * (page - 1), search)
	}															//1 * (1 - 0)
}