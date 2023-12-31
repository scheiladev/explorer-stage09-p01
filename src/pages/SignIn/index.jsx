import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <ButtonText 
          to="/register"
          title="Criar conta"
        />

      </Form>

      <Background />
    </Container>
  )
}