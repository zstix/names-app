interface INamesAppThemeColors {
  primary: string;
  secondary: string;
  tertiary?: string;
  warning?: string;
}

interface INamesAppTheme {
  color: {
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