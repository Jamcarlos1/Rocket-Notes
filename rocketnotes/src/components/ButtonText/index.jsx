import { Container } from './styles'
import PropTypes from 'prop-types';


export function ButtonText({ title, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}

ButtonText.propTypes = {
    title: PropTypes.string.isRequired, // Espera-se que title seja uma string e é obrigatório
  };