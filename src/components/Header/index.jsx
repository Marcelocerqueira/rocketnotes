import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return(
    <Container>
        <Profile>
          <img 
          src="https://github.com/marcelocerqueira.png"
          alt="foto do usuário" />

        <div>
          <span>Bem Vindo</span>
          <strong>Marcelo Cerqueira</strong>
        </div>
        </Profile>
        
        <Logout>
        <RiShutDownLine />
        </Logout>

      
    </Container>
  );
}