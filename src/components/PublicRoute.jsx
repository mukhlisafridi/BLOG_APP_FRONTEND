import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const PublicRoute = ({ children }) => {
  const { user } = useContext(StoreContext);

  if (user) {
    return <Navigate to="/" replace />;
  }


  return children;
};

export default PublicRoute;