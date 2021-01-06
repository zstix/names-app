import React from 'react';
import { css, withTheme } from '@emotion/react';
import * as Feather from 'react-feather';

interface IButtonProps {
  to?: string;
  theme: INamesAppTheme
}

interface IWithIcon extends IButtonProps {
  icon: string;
  children?: string;
}

interface IWithText extends IButtonProps {
  children: string;
  icon?: string;
}

const Button: React.FC<IWithText | IWithIcon> = ({ icon, theme }) => {
  const Icon: React.FC = Feather?.[icon];

  return (
    <div>
      <Icon />
      <span>Button</span>
    </div>
  );
};

export default withTheme(Button);