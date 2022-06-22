import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  FontHeading2FamilySansSerif,
  FontHeading2Size,
  FontHeading2WeightRegular,
  FontHeading2WeightSemiBold,
  Spacing5
} from 'tokens';

type weights = 'regular' | 'semibold';

interface IHeading2 extends HTMLAttributes<HTMLHeadingElement> {
  weight?: weights;
  children?: ReactNode;
}

const headingWeights = {
  regular: FontHeading2WeightRegular,
  semibold: FontHeading2WeightSemiBold
};

const StyledHeading2 = styled.h2<{ weight: weights }>`
  font-size: ${FontHeading2Size};
  font-weight: ${({ weight }) => headingWeights[weight]};
  font-family: ${FontHeading2FamilySansSerif};
  margin: ${Spacing5} 0;
`;

const Heading2: React.FC<IHeading2> = ({ weight = 'semibold', children, ...rest }) => {
  return (
    <StyledHeading2 weight={weight} {...rest}>
      {children}
    </StyledHeading2>
  );
};

export default Heading2;
