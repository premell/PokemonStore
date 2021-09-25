import {
  NotImplemented,
  NavButton,
  IconThemeProvider,
  BoldRegularText,
} from "shared/components";
import { BsPerson } from "react-icons/bs";

const Login = () => {
  return (
    <NavButton width="70px" style={{ cursor: "not-allowed" }}>
      <BsPerson
        size={26}
        style={{ strokeWidth: "0.1", cursor: "not-allowed" }}
      />
      <h3>Login</h3>
    </NavButton>
  );
};

//<NotImplemented defaultText="Login">
//</NotImplemented>

export default Login;
