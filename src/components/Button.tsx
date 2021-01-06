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

const Button: React.FC<IWithText | IWithIcon> = ({ theme, noBorder, icon, onclick, children }) => (
  <button
    role="button"
    onClick={() => onclick?.()}
    css={css`
      /* TODO: colors via prop with a default */
      --color-border: #ccc;
      --color-background: #ddd;
      --color-font: ${theme.color.text.primary};

      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      margin: 0 0.5em;
      padding: 0.5em;
      position: relative;
      user-select: none;
      outline: none;
      font: ${theme.fonts.primary};
      color: var(--color-font);
      background-color: var(--color-background);
      border-radius: ${children ? '0.75em' : '1.5em'};

      svg + span {
        margin-left: 0.5em;
      }

      ${!noBorder && css`
        border: 2px solid;
        border-bottom-width: 4px;
        border-color: var(--color-border);

        &:active {
          margin-top: 2px;
          transform: translateY(2px);
          border-bottom-width: 2px;
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