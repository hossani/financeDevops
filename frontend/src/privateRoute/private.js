
import Log from '../log/formulaireLog';
const PrivateRoute = ({ children },authenticated) => {

  return authenticated ? children : <Log/>;
};

export default PrivateRoute;
