import React from 'react';
import styled from 'styled-components';
import * as Typography from 'typography';

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
`;

const Paragraph = styled(Typography.Body)``;

export default function About() {
  return (
    <section>
      <Container>
        <Paragraph>
          The project is public on <a href="https://github.com/klan/bottle">Github</a> and is hosted on{' '}
          <a href="https://bottle-10c71.web.app/">bottle-10c71.web.app/</a>. All resources used are free to use.
        </Paragraph>
        <br />
        <Paragraph>The project is created using:</Paragraph>
        <ul>
          <li>
            <a href="https://react-spring.io/">react-spring</a>
          </li>
          <li>
            <a href="https://styled-components.com/">styled-components</a>
          </li>
          <li>
            <a href="https://webpack.js.org/">Webpack</a>
          </li>
          <li>
            <a href="">React</a> and <a href="https://www.typescriptlang.org/">Typescript</a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
