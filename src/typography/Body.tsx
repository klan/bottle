import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  FontBodyFamily,
  FontBodySizeSmall,
  FontBodySizeMedium,
  FontBodyWeightRegular,
  FontBodyWeightSemiBold
} from 'tokens';

type sizes = 'sm' | 'md';
type weights = 'regular' | 'semibold';

interface IBody extends HTMLAttributes<HTMLParagraphElement> {
  size?: sizes;
  weight?: weights;
  children?: ReactNode;
}

const bodySizes = {
  sm: FontBodySizeSmall,
  md: FontBodySizeMedium
};

const bodyWeights = {
  regular: FontBodyWeightRegular,
  semibold: FontBodyWeightSemiBold
};

const StyledBody = styled.p<{ size: sizes; weight: weights }>`
  font-size: ${({ size }) => bodySizes[size]};
  font-weight: ${({ weight }) => bodyWeights[weight]};
  font-family: ${FontBodyFamily};
  margin: 0;
`;

const Body: React.FC<IBody> = ({ size = 'sm', weight = 'regular', children, ...rest }) => {
  return (
    <StyledBody size={size} weight={weight} {...rest}>
      {children}
    </StyledBody>
  );
};

export default Body;
