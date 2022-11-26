import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {AuthContext} from '../../Context/AuthProvider'

import useSaller from '../../hooks/useSaller';
import Loading from '../../Shared/Loading/Loading';

const SallerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
  
    const [isSaller, isSallerLoading] = useSaller(user?.email)

    if(loading || isSallerLoading){
        return <Loading></Loading>
    }

    if (user && isSaller){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SallerRoute;