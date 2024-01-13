import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    setError(null)

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products")

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProducts(productsAdapted)
      })
      .catch((error) => {
        console.error("Error fetching products: ", error)
        setError(
          "Hubo un error al obtener los productos. Por favor, inténtalo de nuevo más tarde."
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  return (
    <div className="layout">
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando</p>
    
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  )
}

export default ItemListContainer