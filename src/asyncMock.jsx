const products = [
    {
        id:`1`,
        name:"collar piedras semipreciosas",
        price: 4500,
        category:"collar" 
        img:, 
        stock:5,
        description:"collar estilo bijouterie medieval con piedras semipreciosas"
    },
    {id:`2`, name:"collar tejido medieval", price: 5000, category: "collar", img: , stock: 5, description: "collar tejido como malla con accesorios" }
    {id:`3`, name:"aro con piedra", price: 1000, category: "aros", img: , stock: 5, description: "aros con gancho en acero quirurgico y dije de piedra semipreciosa" }
    {id:`4`, name:"pulsera de cristales", price: 3000, category: "pulsera", img: , stock: 10, description: "pulcera con cristales de roca y broche tipo cartier"}
    {id:`5`, name:"pulsera elastica", price: 2000, category: "pulsera", img: , stock: 20, description: "pulsera elastizada con dijes y esferas"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export default products





