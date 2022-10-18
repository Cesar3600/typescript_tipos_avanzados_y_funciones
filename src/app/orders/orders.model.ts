import { Product } from '../products/product.model'
import { User } from './../users/users.model'

interface order {
	id: string
	createAt: Date
	products: Product
	user: User
}
