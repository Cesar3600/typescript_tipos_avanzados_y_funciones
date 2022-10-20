import { BaseModel } from '../base.model'
import { Product } from '../products/product.model'
import { User } from './../users/users.model'

export interface order extends BaseModel {
	products: Product
	user: User
}
