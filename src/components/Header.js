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
      {/* Nesse button abaixo, passamos a função para trocar de tela além de passar o nome que será recebido na url da página */}
      <StyledButton onClick={() => goToProfilePage(navigate, "Giovanni")}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
