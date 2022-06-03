import { Container } from "./styles";

export function Button({title, loading, ...rest }) {
  return( 
  <Container 
    type="button"
    disabled={loading}
    {...rest}//o rest significa que qual quer outra propriedade que tenha esse button pode ser chamando aqui no components
  >

      {loading ? 'Carregando...' : title}

    </Container>
  );
}
