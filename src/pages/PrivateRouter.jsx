import { Navigate, Outlet } from "react-router-dom"


const isSigned=true

const PrivateRouter = () => {
  return (
    <div>
    {isSigned ? <Outlet/> :<Navigate to="/login"/> }
    </div>
  )
}

export default PrivateRouter
