import {StyledHeader, StyledButton} from "../style"
import {goToHomePage, goToProfilePage} from "../Routes/coordinator.js"
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate()

  return (

    <StyledHeader>
      <StyledButton onClick={()=> goToHomePage(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfilePage(navigate, "Giovanni")}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
