import { Container } from './style'
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}

// Definindo as propTypes para o componente Section
Section.propTypes = {
  title: PropTypes.string.isRequired, // title deve ser uma string e é obrigatório
  children: PropTypes.node, // children pode ser qualquer tipo de conteúdo renderizável (string, número, elementos, etc.)
};

// Definindo valores padrão para as props
Section.defaultProps = {
  title: 'Default Title', // valor padrão para title
};