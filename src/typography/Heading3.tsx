import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  FontHeading3FamilySansSerif,
  FontHeading3Size,
  FontHeading3WeightRegular,
  FontHeading3WeightSemiBold,
  Spacing5
} from 'tokens';

type weights = 'regular' | 'semibold';

interface IHeading3 extends HTMLAttributes<HTMLHeadingElement> {
  weight?: weights;
  children?: ReactNode;
}

const headingWeights = {
  regular: FontHeading3WeightRegular,
  semibold: FontHeading3WeightSemiBold
};

const StyledHeading3 = styled.h3<{ weight: weights }>`
  font-size: ${FontHeading3Size};
  font-weight: ${({ weight }) => headingWeights[weight]};
  font-family: ${FontHeading3FamilySansSerif};
  margin: ${Spacing5} 0;
`;

const Heading3: React.FC<IHeading3> = ({ weight = 'semibold', children, ...rest }) => {
  return (
    <StyledHeading3 weight={weight} {...rest}>
      {children}
    </StyledHeading3>
  );
};

export default Heading3;
