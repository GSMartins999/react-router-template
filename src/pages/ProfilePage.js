import { useParams } from "react-router-dom";
import Header from "../components/Header.js";
import { MainContainer } from "../style";

function ProfilePage() {

  const {name} = useParams()
  console.log(name)

  return (
    <MainContainer>
      <Header />
      <h1>Página acerca de {name}</h1>
    </MainContainer>
  );
}

export default ProfilePage;
