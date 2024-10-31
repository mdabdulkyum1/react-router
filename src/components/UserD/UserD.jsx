
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

function UserD() {

  const {userId} = useParams();
  console.log(userId)
    const user = useLoaderData();
    const {name} = user;

    const navigate  = useNavigate();
    const handelBack = () => {
      navigate(-1)
    }
    
  return (
    <div>
        <h1>user: {user.id}</h1>
        <h1 className="text-green-600 text-4xl">My name is: {name}</h1>
        <button onClick={handelBack} className='bg-purple-400 p-7'>Go Back</button>
    </div>
  )
}

export default UserD