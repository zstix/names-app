import React from 'react';
import { css, withTheme } from '@emotion/react';

import Icon, { ICON_TYPES } from './Icon';

interface IButtonProps {
  theme: INamesAppTheme
  onclick?: () => void; // TODO?
}

interface IWithIcon extends IButtonProps {
  icon: keyof typeof ICON_TYPES;
  children?: string;
}

interface IWithText extends IButtonProps {
  children: string;
  icon?: keyof typeof ICON_TYPES;
}

// TODO: styling
const Button: React.FC<IWithText | IWithIcon> = ({ theme, icon, children }) => (
  <div role="button">
    {icon && <Icon name={icon} />}
    {children}
  </div>
);

export default withTheme(Button);