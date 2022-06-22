import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BorderRadiusMedium, Spacing3, Spacing5 } from 'tokens';
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

const Area = styled.textarea<{ isInvalid: boolean }>`
  ${ValidInputStyle}

  border-bottom-left-radius: ${BorderRadiusMedium};
  border-top-left-radius: ${BorderRadiusMedium};
  border-top-right-radius: ${BorderRadiusMedium};
  padding: ${Spacing3} ${Spacing5};

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

export interface IArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ value, onInvalid, ...rest }: IArea): JSX.Element {
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  return (
    <Container>
      <Area
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
