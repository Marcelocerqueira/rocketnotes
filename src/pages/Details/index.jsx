import { Container } from "./styles.js";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

      <Section />

      <Button title="Voltar" />
    </Container>
  );
}
