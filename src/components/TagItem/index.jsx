import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function TagItem({ isNew, value, onclick, ...rest}) {
  return (
    <Container $isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="buttom"
        onClick={onclick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>

    </Container>
  );
}