import { Link } from "react-router-dom"


function Header() {
  return (
    <div className="flex gap-11">
        
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Header