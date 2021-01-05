interface NamesAppThemeColors {
  primary: string;
  secondary: string;
  tertiary?: string;
  warning?: string;
}

interface NamesAppTheme {
  color: {
    text: NamesAppThemeColors;
    background: NamesAppThemeColors;
  }
}