import CasrtWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"
const NavBar =() =>{

    return(
  
      <nav className="NavBar">
        <Link to="/">
        <h3>CristalisArte</h3>
        </Link> 
            <div className="categories">
            <NavLink to={"/category/collar"} className={({isActive}) => isActive ? `ActiveOption` : `Option`}>collar</NavLink>
            <NavLink to={"/category/pulsera"} className={({isActive}) => isActive ? `ActiveOption` : `Option`}>pulsera</NavLink>
            <NavLink to={"/category/aros"} className={({isActive}) => isActive ? `ActiveOption` : `Option`}>aros</NavLink>
               

               
            </div>
            <CasrtWidget/> 
      </nav>
      ) 
      
      
  }
export default NavBar
