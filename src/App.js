import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import "bulma/css/bulma.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda!!"}/>
    </div>
  )
}

export default App
