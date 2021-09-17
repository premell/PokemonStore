import {
  NotImplemented,
  NavButton,
  IconThemeProvider,
  BoldRegularText,
} from "shared/components";
import { BsPerson } from "react-icons/bs";

const Login = () => {
  return (
    <NavButton width="70px">
      <BsPerson size={26} style={{ strokeWidth: "0.1" }} />
      <BoldRegularText>Login</BoldRegularText>
    </NavButton>
  );
};

//<NotImplemented defaultText="Login">
//</NotImplemented>

export default Login;
