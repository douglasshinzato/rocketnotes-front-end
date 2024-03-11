import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/douglasshinzato.png"
          alt="foto do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Douglas Shinzato</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
