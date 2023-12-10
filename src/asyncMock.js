import cronos from "./Components/ImgItem/fiat-cronos-2023.png"
import gol from "./Components/ImgItem/volkswagen-gol-trend-2023.png"
import focus from "./Components/ImgItem/ford-focus-2023.png"
import clio from "./Components/ImgItem/renault-clio-2023.png"
import punto from "./Components/ImgItem/fiat-punto-2023.png"
import argos from "./Components/ImgItem/fiat-argos-2023.png"
import ecosport from "./Components/ImgItem/ford-ecosport-2023.png"
import mondeo from "./Components/ImgItem/ford-mondeo-2023.png"
import raptor from "./Components/ImgItem/ford-ranger-raptor-2023.png"
import kwid from "./Components/ImgItem/renault-kwid-2023.png"
import polo from "./Components/ImgItem/volkswagen-polo-2023.png"
import strada from "./Components/ImgItem/fiat-strada-volcano-2023.png"
import ka from "./Components/ImgItem/ford-ka-2023.png"
import vento from "./Components/ImgItem/volkswagen-vento-startline-2023.png"

const products = [
    {
        id: `1`,
        name: `Cronos`,
        price: 10000,
        marcas: `Fiat`,
        description: `Cilindrada: 1330 
        Inyeccion : Electronica multipunto
        Combustible: Nafta
        Direccion : Asistencia electronica
        Caja de cambios: 5 velocidades
        Tanque de combustible: 48ls
        Velocidad maxima: 174 km`,
        category: `fiat`,
        stock: 100,
        img: cronos
        
    },
    {
        id: `2`,
        name: `Gol Trend`,
        price: 7000,
        marcas: `Volkswagen`,
        description: ``,
        category: `volkswagen`,
        stock: 100,
        img:gol

    },
    {
        id: `3`,
        name: `Focus`,
        price: 15000,
        marcas: `Ford`,
        descripcion: ``,
        category: `ford`,
        stock: 100,
        img:focus
    },
    {
        id: `4`,
        name: `Clio`,
        price: 6500,
        marcas: `Renault`,
        descripcion: ``,
        category: `renault`,
        stock: 100,
        img:clio
    },
    {
        id: `5`,
        name: `Punto`,
        price: 7000,
        marcas: `Fiat`,
        descripcion: ``,
        category: `fiat`,
        stock: 100,
        img:punto
    },
    {
        id: `6`,
        name: `Argos`,
        price: 8000,
        marcas: `Fiat`,
        descripcion: ``,
        category: `fiat`,
        stock: 100,
        img:argos
    },
    {
        id: `7`,
        name: `Eco Sport`,
        price: 18000,
        marcas: `Ford`,
        descripcion: ``,
        category: `ford`,
        stock: 100,
        img:ecosport
    },
    {
        id: `8`,
        name: `Raptor`,
        price: 20000,
        marcas: `Ford`,
        descripcion: ``,
        category: `ford`,
        stock: 100,
        img:raptor
    },
    {
        id: `9`,
        name: `Mondeo`,
        price: 20000,
        marcas: `Ford`,
        descripcion: ``,
        category: `ford`,
        stock: 100,
        img:mondeo
    },
    {
        id: `10`,
        name: `Kwid`,
        price: 6500,
        marcas: `Ford`,
        descripcion: ``,
        category: `renault`,
        stock: 100,
        img:kwid
    },
    {
        id: `11`,
        name: `Polo`,
        price: 12000,
        marcas: `Volkswagen`,
        descripcion: ``,
        category: `volkswagen`,
        stock: 100,
        img:polo
    },
    {
        id: `12`,
        name: `Strada`,
        price: 17000,
        marcas: `Fiat`,
        descripcion: ``,
        category: `fiat`,
        stock: 100,
        img:strada
    },
    {
        id: `13`,
        name: `Ka`,
        price: 7500,
        marcas: `Ford`,
        descripcion: ``,
        category: `ford`,
        stock: 100,
        img:ka
    },
    {
        id: `14`,
        name: `Vento`,
        price: 15000,
        marcas: `Volkswagen`,
        descripcion: ``,
        category: `volkswagen`,
        stock: 100,
        img:vento
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod=>prod.category === category))
        }, 500);
    })
}