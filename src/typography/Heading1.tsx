import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  FontHeading1FamilySansSerif,
  FontHeading1Size,
  FontHeading1WeightRegular,
  FontHeading1WeightSemiBold
} from 'tokens';

type weights = 'regular' | 'semibold';

interface IHeading1 extends HTMLAttributes<HTMLHeadingElement> {
  weight?: weights;
  children?: ReactNode;
}

const headingWeights = {
  regular: FontHeading1WeightRegular,
  semibold: FontHeading1WeightSemiBold
};

const StyledHeading1 = styled.h1<{ weight: weights }>`
  font-size: ${FontHeading1Size};
  font-weight: ${({ weight }) => headingWeights[weight]};
  font-family: ${FontHeading1FamilySansSerif};
`;

const Heading1: React.FC<IHeading1> = ({ weight = 'semibold', children, ...rest }) => {
  return (
    <StyledHeading1 weight={weight} {...rest}>
      {children}
    </StyledHeading1>
  );
};

export default Heading1;
