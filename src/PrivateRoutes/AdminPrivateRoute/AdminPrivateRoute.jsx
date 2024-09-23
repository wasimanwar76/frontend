import React from 'react'
import { useAuth } from '../../context/authContext';
import Spinner from '../../Components/Spinner/Spinner';
import { Navigate, Outlet } from 'react-router-dom';

const AdminPrivateRoute = () => {
    const { user, loading } = useAuth()

    if (loading) {
        return <Spinner/>;
    }
    

    if (user?.role === 'Admin') {
        return <Outlet />;  // Render the nested routes (e.g., the dashboard)
      } else {
        // If user is not logged in or not a student, redirect to the login page or show a message
        return <Navigate to="/login" replace />;
      }
}

export default AdminPrivateRoute
