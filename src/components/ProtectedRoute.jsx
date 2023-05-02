import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext"

// Componente para proteger las rutas
// eslint-disable-next-line react/prop-types
export function ProtectedRoute({children}) {
    const {user, loading} = useAuth();

    if(loading) return <h1>loading</h1>

    if(!user) return <Navigate to='/login' />


    return <>{children}</>
  
}

