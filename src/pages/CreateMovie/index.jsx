import { FiArrowLeft } from 'react-icons/fi';
import { Container, Fixed, Form } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { TagItem } from '../../components/TagItem';

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Fixed>
        <ButtonText
          to="/"
          icon={FiArrowLeft}
          title="Voltar"
        />

        <h2>Novo Filme</h2>
      </Fixed>

      <Form>
        <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>
  
        <Textarea placeholder="Observações" />

        <h3>Marcadores</h3>

        <div className="tags">
          <TagItem value="Drama" />
          <TagItem isNew placeholder="Novo marcador" />
        </div>

        <div>
          <Button title="Excluir filme" className="bt-delete" />
          <Button title="Salvar alterações"/>
        </div>
      </Form>
    </Container>
  )
}