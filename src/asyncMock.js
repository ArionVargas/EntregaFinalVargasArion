const products = [
    {
        id: `1`,
        nombre: `Cronos`,
        precio: 25000,
        marca: ``,
        descripcion: ``,
        categoria: `autos`,
        stock: 100,
        
    },
    {
        id: `2`,
        nombre: `Gol Trend`,
        precio: 25000,
        marca: ``,
        descripcion: ``,
        categoria: `autos`,
        stock: 100
    },
    {
        id: `3`,
        nombre: `Focus`,
        precio: 25000,
        marca: ``,
        descripcion: ``,
        categoria: `autos`,
        stock: 100
    },
    {
        id: `4`,
        nombre: `Megane`,
        precio: 25000,
        marca: ``,
        descripcion: ``,
        categoria: `autos`,
        stock: 100
    },
    {
        id: `5`,
        nombre: `Palio`,
        precio: 25000,
        marca: ``,
        descripcion: ``,
        categoria: `autos`,
        stock: 100
    },
    {
        id: `6`,
        nombre: `Astrada`,
        precio: 25000,
        marca: ``,
        descripcion: ``,
        categoria: `autos`,
        stock: 100
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductsById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}