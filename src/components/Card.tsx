import React from 'react';
import styled from 'styled-components';
import type { ICard } from 'interfaces/app';
import {
  BorderRadiusMedium,
  BorderRadiusSmall,
  BoxShadowMedium,
  ColorNeutralSurface60,
  ColorPrimarySurface20,
  Spacing1,
  Spacing3
} from 'tokens';
import Button from 'components/Button';
import * as Typography from 'typography';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'image text'
    'button button';
  grid-template-columns: 80px auto;
  grid-template-rows: auto 32px;
  gap: ${Spacing3};
  box-shadow: ${BoxShadowMedium};
  border-radius: ${BorderRadiusMedium};
  height: 100%;
  min-height: 250px;
  background-color: white;
  padding: ${Spacing3};
  box-sizing: border-box;
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

const Pill = styled(Typography.Label)`
  background-color: ${ColorPrimarySurface20};
  padding: ${Spacing1} ${Spacing3};
  border-radius: ${BorderRadiusSmall};
  color: ${ColorNeutralSurface60};
`;

const Name = styled(Typography.Heading3)``;

const Tagline = styled(Typography.Heading4)``;

const ButtonContainer = styled.div`
  grid-area: button;
`;

const CtaButton = styled(Button)`
  width: 100%;
`;

export default function Card(props: ICard) {
  const {
    item: {
      name,
      tagline,
      image_url,
      ingredients: { yeast, hops, malt }
    }
  } = props;

  let ingredientsAmount: number = hops.length + malt.length;
  if (yeast) ingredientsAmount++;

  return (
    <Container>
      <ImageContainer>
        <Image src={image_url} />
      </ImageContainer>
      <Text>
        <Pill>{`${ingredientsAmount} ingredients`}</Pill>
        <Name>{name}</Name>
        <Tagline>{tagline}</Tagline>
      </Text>
      <ButtonContainer>
        <CtaButton size="sm">View</CtaButton>
      </ButtonContainer>
    </Container>
  );
}
