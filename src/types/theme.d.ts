interface INamesAppThemeColors {
  primary: string;
  secondary: string;
  tertiary?: string;
  warning?: string;
}

interface INamesAppThemeColorVariants {
  red: string[];
  green: string[];
  blue: string[];
  yellow: string[];
  gray: string[];
}

interface INamesAppTheme {
  color: INamesAppThemeColorVariants & {
    text: INamesAppThemeColors;
    background: INamesAppThemeColors;
  }
  breakpoints: {
    mobile: string;
    tablet?: string;
    desktop: string;
  }
  fonts: {
    primary: string;
    secondary?: string;
  }
}