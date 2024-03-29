import React, { useContext } from 'react'
import { AuthContext } from '../providers/Authprovider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

if(loading) {
  return <p>Loading................</p>
}

    if(user){
        return children;
    }
    else{
        return <Navigate state={{from: location}} to='/login' replace></Navigate>
    }

  return (
    <div>
        
    </div>
  )
}

export default PrivateRoute