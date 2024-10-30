
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function User({user}) {
    const {id,name, email} = user;
  return (
    <div className='border border-purple-500 p-4 rounded-2xl'>
        <h1 className='text-4xl'>{name}</h1>
        <p>{email}</p>
        <Link to={`${id}`}>User Details</Link>
    </div>
  )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User
