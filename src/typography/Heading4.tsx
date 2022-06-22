import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  FontHeading4FamilySansSerif,
  FontHeading4Size,
  FontHeading4WeightRegular,
  FontHeading4WeightSemiBold,
  Spacing3
} from 'tokens';

type weights = 'regular' | 'semibold';

interface IHeading4 extends HTMLAttributes<HTMLHeadingElement> {
  weight?: weights;
  children?: ReactNode;
}

const headingWeights = {
  regular: FontHeading4WeightRegular,
  semibold: FontHeading4WeightSemiBold
};

const StyledHeading4 = styled.h4<{ weight: weights }>`
  font-size: ${FontHeading4Size};
  font-weight: ${({ weight }) => headingWeights[weight]};
  font-family: ${FontHeading4FamilySansSerif};
  margin: ${Spacing3} 0;
`;

const Heading4: React.FC<IHeading4> = ({ weight = 'semibold', children, ...rest }) => {
  return (
    <StyledHeading4 weight={weight} {...rest}>
      {children}
    </StyledHeading4>
  );
};

export default Heading4;
