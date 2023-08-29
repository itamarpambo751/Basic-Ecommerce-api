import Entity from "../../base/entity.base";

export default class Manager extends Entity {
	readonly name: string
	readonly phone: number
	readonly email: string

	constructor(props: Manager) {
		super()
		Object.assign(this, props)
	}
}