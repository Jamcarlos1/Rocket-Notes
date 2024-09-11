import { Container } from './styles'
import PropTypes from 'prop-types';

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container >
  )
}

// Definindo as propTypes para o componente Button
Button.propTypes = {
  title: PropTypes.string.isRequired, // title deve ser uma string e é obrigatório
  loading: PropTypes.bool, // loading deve ser um booleano e é opcional
};

// Definindo valores padrão para as props
Button.defaultProps = {
  loading: false, // valor padrão para loading
};