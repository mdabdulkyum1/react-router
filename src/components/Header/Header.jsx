import { NavLink } from "react-router-dom"
import './Header.css'

function Header() {
  return (
    <div className="flex gap-11">
        
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
{/* 
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Link to='/contact'>Contact</Link> */}
    </div>
  )
}

export default Header