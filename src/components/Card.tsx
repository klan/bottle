import React from 'react';
import styled from 'styled-components';
import type { ICard } from 'interfaces/app';
import { BorderRadiusMedium, BoxShadowMedium, Spacing3 } from 'tokens';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'image text'
    'button button';
  grid-template-columns: 80px auto;
  grid-template-rows: auto 40px;
  gap: ${Spacing3};
  box-shadow: ${BoxShadowMedium};
  border-radius: ${BorderRadiusMedium};
  height: 100%;
  min-height: 250px;

  background-color: white;
`;

const ImageContainer = styled.div`
  grid-area: image;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 60px;
  max-height: 140px;
`;

const Text = styled.div`
  grid-area: text;
`;

const ButtonContainer = styled.div`
  grid-area: button;
`;

export default function Card(props: ICard) {
  const {
    item: {
      name,
      tagline,
      image_url,
      ingredients: { yeast: yeastName, hops, malt }
    }
  } = props;

  const hopsName = hops.map(({ name }) => name).join(', ');
  const maltName = malt.map(({ name }) => name).join(', ');

  return (
    <Container>
      <ImageContainer>
        <Image src={image_url} />
      </ImageContainer>
      <Text>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
      </Text>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
}
