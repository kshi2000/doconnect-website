import { Button } from "@chakra-ui/react";
import { useAuthContext } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";

const AuthModifierBtn = () => {
  const { isLoggedIn, signOut } = useAuthContext();

  if (isLoggedIn) {
    return (
      <Button colorScheme="facebook" variant="solid" onClick={signOut}>
        Logout
      </Button>
    );
  }

  return (
    <NavLink to="login-signup">
      <Button colorScheme="facebook" variant="solid" onClick={signOut}>
        Login / SignUp
      </Button>
    </NavLink>
  );
};
export default AuthModifierBtn;
