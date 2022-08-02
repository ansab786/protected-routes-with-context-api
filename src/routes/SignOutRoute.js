import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../ContextApi/AuthProvider";

function SignOutRoute() {
  const { handleAuthChange } = useCreateAuthDispatchContext();

  handleAuthChange(false);

  return <Navigate to="/" />;
}

export default SignOutRoute;
