import { useEffect, useState } from "react"
import {getProducts, getProductsByCategory} from "../asyncMock.jsx"
import ItemList from "./ItemList.jsx"
const itemListConteiner = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const{ itemId } =  useParams
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
    
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    return (
        <div>
            <h1>{greeting} </h1>
            <ItemList products={products}/>    
        </div>
    )
}
export default itemListConteiner