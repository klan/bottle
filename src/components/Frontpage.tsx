import React from 'react';
import styled from 'styled-components';
import type { IFrontpage } from 'interfaces/app';
import Button from 'components/Button';
import * as Typography from 'typography';
import { Spacing6 } from 'tokens';

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  padding: ${Spacing6};
`;

const MainText = styled(Typography.Heading2)``;

const Text = styled(Typography.Heading3)``;

export default function Frontpage(props: IFrontpage) {
  const { changePage } = props;
  return (
    <section>
      <Container>
        <MainText>
          <span>Go have a look at my </span>
          <Button onClick={() => changePage('beers')}>Beer Collection</Button>
          <span> and feel free to </span>
          <Button onClick={() => changePage('submit')}>Submit</Button>
          <span> your own personal choice.</span>
        </MainText>
        <Text>
          <span>If you want to know more you can also read more </span>
          <Button size="sm" onClick={() => changePage('about')}>
            About
          </Button>
          <span> this project.</span>
        </Text>
      </Container>
    </section>
  );
}
