import React from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'

const StudentPrivateRoute = () => {

    const { user, loading } = useAuth()



    if (loading) {
        return <Spinner/>;
    }
    

    if (user?.role === 'Student') {
        return <Outlet />;  // Render the nested routes (e.g., the dashboard)
      } else {
        // If user is not logged in or not a student, redirect to the login page or show a message
        return <Navigate to="/login" replace />;
      }




}

export default StudentPrivateRoute
