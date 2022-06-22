import React from 'react';
import styled from 'styled-components';
import type { IDetail } from 'interfaces/app';
import * as Typography from 'typography';
import { Spacing3, Spacing9 } from 'tokens';

const Summary = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const Text = styled.div`
  flex: 2;
`;

const Name = styled(Typography.Heading1)``;

const Tagline = styled(Typography.Heading3)``;

const Description = styled(Typography.Body)``;

const Blockquote = styled.blockquote`
  display: flex;
  margin-left: 0;
  margin-bottom: 0;

  &:before {
    content: '❞';
    font-size: 3rem;
    padding: ${Spacing3};
  }
`;

const QuoteText = styled.p`
  margin-left: ${Spacing3};
`;

const Figcaption = styled.figcaption`
  margin-left: ${Spacing9};
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export default function Detail(props: IDetail) {
  const {
    item: {
      name,
      tagline,
      description,
      image_url,
      brewers_tips,
      contributed_by,
      ingredients: { yeast: yeastName, hops, malt }
    }
  } = props;

  const hopsName = hops.map(({ name }) => name).join(', ');
  const maltName = malt.map(({ name }) => name).join(', ');

  return (
    <>
      <Summary>
        <ImageContainer>
          <Image src={image_url} />
        </ImageContainer>
        <Text>
          <Name>{name}</Name>
          <Tagline>{tagline}</Tagline>
          <Description>{description}</Description>
        </Text>
      </Summary>
      <div>
        <figure>
          <Blockquote>
            <QuoteText>{brewers_tips}</QuoteText>
          </Blockquote>
          <Figcaption>—{contributed_by}</Figcaption>
        </figure>
        <List>
          {yeastName && (
            <li>
              <div>Yeast</div>
              <span>{yeastName}</span>
            </li>
          )}
          {hopsName && (
            <li>
              <div>Hops</div>
              <span>{hopsName}</span>
            </li>
          )}
          {maltName && (
            <li>
              <div>Malt</div>
              <span>{maltName}</span>
            </li>
          )}
        </List>
      </div>
    </>
  );
}
