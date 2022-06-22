import React from 'react';
import styled from 'styled-components';
import {
  BorderRadiusMedium,
  ColorOnPrimary,
  ColorPrimary,
  ColorPrimarySurface20,
  ColorPrimarySurface80,
  Spacing3,
  Spacing4
} from 'tokens';
import * as Typography from 'typography';

type sizes = 'sm' | 'lg';

const buttonSizes = {
  sm: Spacing3,
  lg: Spacing4
};

const StyledButton = styled(Typography.Button)<{ size: sizes }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${BorderRadiusMedium};
  border: none;
  padding: ${({ size }) => buttonSizes[size]};
  color: ${ColorOnPrimary};
  background-color: ${ColorPrimary};

  &:hover {
    background-color: ${ColorPrimarySurface80};
  }

  &:focus {
    outline-color: ${ColorPrimary};
    background-color: ${ColorPrimarySurface80};
  }

  &:disabled {
    background-color: ${ColorPrimarySurface20};
  }
`;

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  size?: sizes;
}

const Button: React.FC<IButton> = (props) => {
  const { children, size = 'lg', ...rest } = props;
  return (
    <StyledButton size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
