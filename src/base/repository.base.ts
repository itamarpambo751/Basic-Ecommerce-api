export default abstract class IRepository <T> {
	abstract save(param: T):Promise<T>
	abstract get(id: string):Promise<T>
	abstract patch(id: string, param:Partial<T>):Promise<T>
	abstract delete(id: string):Promise<void>
}