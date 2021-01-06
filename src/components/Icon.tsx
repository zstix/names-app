import React from 'react';
import { withTheme } from '@emotion/react';

interface IIconProps {
  theme: INamesAppTheme;
  icon: string; // TODO: keyof
  color?: string;
  size?: number;
  strokeWidth?: number;
};

// TODO: icon prop
// TODO: implement
const Icon: React.FC<IIconProps> = ({ theme, color, strokeWidth = 3, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${size} ${size}`}
    width={size}
    height={size}
    stroke={color || theme.color.text.primary}
    strokeWidth={strokeWidth}
  >
  </svg>
);

export default withTheme(Icon);