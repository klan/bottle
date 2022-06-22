import { css } from 'styled-components';
import {
  ColorNeutral,
  ColorNeutralSurface40,
  ColorSecondary,
  ColorSecondarySurface40,
  ColorSecondarySurface80,
  ColorDanger,
  ColorDangerVariant,
  BorderWidthSmall,
  BorderWidthMedium
} from 'tokens';

export const ValidInputStyle = css`
  background-color: ${ColorNeutral};
  border: ${BorderWidthSmall} solid ${ColorSecondary};

  &:hover {
    border-color: ${ColorNeutralSurface40};
  }
`;

export const ValidInputFocusStyle = css`
  outline: ${BorderWidthMedium} solid ${ColorSecondarySurface80};
`;

export const ValidInputDisabledStyle = css`
  background-color: ${ColorSecondarySurface40};
  border: none;

  &:hover {
    cursor: not-allowed;
  }
`;

export const InvalidInputStyle = css`
  background-color: ${ColorNeutral};
  border: ${BorderWidthSmall} solid ${ColorDanger};
`;

export const InvalidInputFocusStyle = css`
  outline: ${BorderWidthMedium} solid ${ColorDangerVariant};
`;
