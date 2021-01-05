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
}