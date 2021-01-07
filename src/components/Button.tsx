import React from 'react';
import { css, withTheme } from '@emotion/react';

import Icon, { ICON_TYPES } from './Icon';

interface IButtonProps {
  theme: INamesAppTheme
  noBorder?: boolean;
  onclick?: () => void;
}

interface IWithIcon extends IButtonProps {
  icon: keyof typeof ICON_TYPES;
  children?: string;
}

interface IWithText extends IButtonProps {
  children: string;
  icon?: keyof typeof ICON_TYPES;
}

// TODO: colors
const Button: React.FC<IWithText | IWithIcon> = ({ theme, noBorder, icon, onclick, children }) => (
  <button
    role="button"
    onClick={() => onclick?.()}
    css={css`
      --color-border: #ccc;
      --color-background: #ddd;
      --color-font: ${theme.color.text.primary};
      --size-border: ${children ? 4 : 3}px;
      --size-adjust: ${children ? 2 : 3}px;
      --size-radius: ${children ? 0.75 : 1.5}em;
      --size-padding: ${children ? '0.5em 0.8em' : '0.5em 0.6em'};

      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      margin: 0 0.5em;
      padding: var(--size-padding);
      position: relative;
      user-select: none;
      outline: none;
      font: ${theme.fonts.primary};
      color: var(--color-font);
      background-color: var(--color-background);
      border-radius: var(--size-radius);

      svg + span {
        margin-left: 0.6em;
      }

      ${!noBorder && css`
        border: 0 solid;
        border-bottom-width: var(--size-border);
        border-color: var(--color-border);

        &:active {
          margin-top: var(--size-adjust);
          transform: translateY(var(--size-adjust) * -1);
          border-bottom-width: calc(var(--size-border) - var(--size-adjust));
        }
      `}

      ${noBorder && 'border: none;'}
    `}
  >
    {icon && <Icon name={icon} />}
    {children && <span>{children}</span>}
  </button>
);

export default withTheme(Button);