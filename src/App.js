import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import "bulma/css/bulma.css"
import ItemCount from './Components/ItemCount/ItemCount'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App


{/* <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda!!"}/>
      <ItemDetailConteiner />
      <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log("cantidad agregada" ,quantity)}/> */}