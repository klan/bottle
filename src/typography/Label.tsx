import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { FontLabelFamily, FontLabelSize, FontLabelWeightSemiBold } from 'tokens';

interface ILabel extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const StyledLabel = styled.span`
  font-size: ${FontLabelSize};
  font-weight: ${FontLabelWeightSemiBold};
  font-family: ${FontLabelFamily};
`;

const Label: React.FC<ILabel> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default Label;
