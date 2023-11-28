import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import "bulma/css/bulma.css"
import ItemCount from './Components/ItemCount/ItemCount'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda!!"}/>
      <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log("cantidad agregada" ,quantity)}/>
    </div>
  )
}

export default App
