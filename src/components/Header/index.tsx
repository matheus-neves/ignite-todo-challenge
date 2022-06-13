import { Container } from '@components/Header/styles';
import logoImg from '@assets/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt='Todo' />
    </Container>
  );
}
