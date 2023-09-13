import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'
import ItemCount from "./components/ItemCount"
import { BrowserRouter } from 'react-router-dom'

function App() {
 

  return (
    <div className='app'>
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path="/" elemnt={<ItemListConteiner/>}/>
          <Route path="/category/:categoryId" elemnt={<ItemListConteiner/>}/>
          <Route path="/item/:itemId" elemnt={<ItemDetailConteiner/>}/>
          <Route path="*" elemnt={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </BrowserRouter>
     
    </div>
  )
}

export default App
