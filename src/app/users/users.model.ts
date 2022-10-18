export enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	COSTUMER = 'costumer'
}

export type User = {
	id: string | number
	userName: string
	role: ROLES
}
