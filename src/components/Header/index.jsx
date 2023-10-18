import { Link } from 'react-router-dom';
import { Container, Profile } from './styles';

import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>
      <div>
        <Link to='/'>RocketMovies</Link>

        <Input
          type="text"
          placeholder="Pesquisar pelo título"
        />
        
        <Profile>
          <div>
            <Link to="/profile">
              Scheila Stihler
            </Link>
            <button>sair</button>
          </div>

          <Link to="/profile">
            <img 
              src="https://github.com/scheiladev.png" 
              alt="Foto do usuário"
            />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}