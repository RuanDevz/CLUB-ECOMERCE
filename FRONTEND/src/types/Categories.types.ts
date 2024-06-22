import Cartproducts from "../Context/Cart.context"

interface Category {
    id: string,
    name: string,
    displayname: string,
    imageUrl: string
    quantity?: number


}

export default Category