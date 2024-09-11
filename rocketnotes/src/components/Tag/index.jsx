import { Container } from './styles'
import PropTypes from 'prop-types';

export function Tag({ title }) {
  return (
    <Container>
      {title}
    </Container>
  )
}

Tag.propTypes = {
  title: PropTypes.string.isRequired, // Define que title deve ser uma string e é obrigatório
};