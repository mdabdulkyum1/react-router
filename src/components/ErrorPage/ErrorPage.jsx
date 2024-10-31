import { Link, useRouteError } from "react-router-dom"



function ErrorPage() {

  const error = useRouteError();



  return (
    <div className="h-[100vh] flex flex-col gap-9 items-center justify-center">
        <h1 className="font-extrabold text-4xl text-center"> Oops!!! <span className="text-red-800">( :</span></h1>
        <p>
          {
            error.statusText || error.message
          }
          {
            error.status === 404 && <div>
              <h3>Page not Found</h3>
              <p>Go back home</p>
              <Link to="/" className="text-purple-400">Home</Link>
            </div> 
          }
        </p>
        {/* <button onClick={handelBack}>Go Back</button> */}
    </div>
  )
}

export default ErrorPage