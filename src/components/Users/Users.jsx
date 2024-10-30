import { useLoaderData } from "react-router-dom"
import User from './../User/User';



function Users() {
    const  users = useLoaderData();
  return (
    <>
    <div className="text-7xl">Users {users.length}</div>
    <div className="grid grid-cols-4 gap-6 m-11">
            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
    </div>
    </>
  )
}

export default Users