
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';

function User({user}) {
    const {id,name, email} = user;

     const navigate = useNavigate()
    const handelClickBtn = () =>{
        navigate(`/users/${id}`)
    }


  return (
    <div className='border border-purple-500 p-4 rounded-2xl'>
        <h1 className='text-4xl'>{name}</h1>
        <p>{email}</p>
        <Link to={`${id}`}>User Details</Link>
        <Link to={`${id}`}><button  className='bg-green-600 p-5'>Details</button></Link>
        <button className='bg-red-600 p-5' onClick={handelClickBtn}>D</button>
    </div>
  )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User
