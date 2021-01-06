import React from 'react';
import { css, withTheme } from '@emotion/react';

import Icon, { ICON_TYPES } from './Icon';

interface IButtonProps {
  to?: string;
  theme: INamesAppTheme
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
const Button: React.FC<IWithText | IWithIcon> = ({ icon, theme }) => (
  <div role="button">
    {icon && <Icon name={icon} />}
    <span>Button</span>
  </div>
);

export default withTheme(Button);