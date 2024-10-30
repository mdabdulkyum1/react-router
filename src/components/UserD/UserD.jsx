
import { useLoaderData } from 'react-router-dom';

function UserD() {

    const user = useLoaderData();

    const {name} = user
    
  return (
    <div>
        <h1>user: {user.id}</h1>
        <h1 className="text-green-600 text-4xl">My name is: {name}</h1>
    </div>
  )
}

export default UserD