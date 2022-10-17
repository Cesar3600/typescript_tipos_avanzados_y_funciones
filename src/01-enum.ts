export enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	COSTUMER = 'costumer'
}

//type roles = 'admin' |'seller'|'costumer'

export type User = {
	userName: string
	role: ROLES
}

const nicoUser: User = {
	userName: 'nico',
	role: ROLES.ADMIN
}
