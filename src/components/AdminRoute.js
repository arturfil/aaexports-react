import { useState } from "react";
import { Redirect, Route } from "react-router";
import { isAuthenticated } from "../services/authService";
import LoginView from "../views/LoginView";

const AdminRoute = ({component: Compnent, ...rest}) => {
  const [object, setObject] = useState(isAuthenticated());

  return (
    <Route {...rest} render={props => object && object.user.role === 'ADMIN' ? (
      <Compnent {...props} />
    ) : (
      <Route pathname="/" component={LoginView} />
    )} />
  )
}


export default AdminRoute;