import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  FontButtonFamily,
  FontButtonSizeSmall,
  FontButtonSizeLarge,
  FontButtonWeightRegular,
  FontButtonWeightSemiBold
} from 'tokens';

type sizes = 'sm' | 'lg';
type weights = 'regular' | 'semibold';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  size?: sizes;
  weight?: weights;
  children?: ReactNode;
}

const buttonSizes = {
  sm: FontButtonSizeSmall,
  lg: FontButtonSizeLarge
};

const buttonWeights = {
  regular: FontButtonWeightRegular,
  semibold: FontButtonWeightSemiBold
};

const StyledButton = styled.button<{ size: sizes; weight: weights }>`
  font-size: ${({ size }) => buttonSizes[size]};
  font-weight: ${({ weight }) => buttonWeights[weight]};
  font-family: ${FontButtonFamily};
  margin: 0;
`;

const Button: React.FC<IButton> = ({ size = 'lg', weight = 'regular', children, ...rest }) => {
  return (
    <StyledButton size={size} weight={weight} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
