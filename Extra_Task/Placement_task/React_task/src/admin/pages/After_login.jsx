import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const After_login = () => {
    const s_aid = sessionStorage.getItem('s_aid');
    return (
        <div>

            {
                s_aid ? <Outlet /> : <Navigate to='/' />
            }

        </div>
    )
}

export default After_login
