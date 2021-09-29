import { BsPerson } from "react-icons/bs";
import {
  NavButton
} from "shared/components";

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

export default Login;
