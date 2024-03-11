import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias
            cumque nemo, earum porro distinctio repellendus? Incidunt hic
            dolores nemo, rerum aperiam explicabo libero vitae numquam
            perferendis alias aut ipsam.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">http://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">http://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
