import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BorderRadiusMedium, Spacing5 } from 'tokens';
import {
  ValidInputStyle,
  ValidInputFocusStyle,
  ValidInputDisabledStyle,
  InvalidInputStyle,
  InvalidInputFocusStyle
} from './theme';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input<{ isInvalid: boolean }>`
  ${ValidInputStyle}

  height: 48px;
  border-radius: ${BorderRadiusMedium};
  padding: 0 ${Spacing5};

  &:focus {
    ${ValidInputFocusStyle}
  }

  &:disabled {
    ${ValidInputDisabledStyle}
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      &:invalid {
        ${InvalidInputStyle}

        &:focus {
          ${InvalidInputFocusStyle}
        }
      }
    `}
`;

export interface IText extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({ value, onInvalid, ...rest }: IText): JSX.Element {
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  return (
    <Container>
      <Input
        type="text"
        defaultValue={value}
        {...rest}
        isInvalid={isInvalid}
        onInvalid={(event) => {
          if (onInvalid) {
            onInvalid(event);
          }
          setIsInvalid(true);
        }}
      />
    </Container>
  );
}
