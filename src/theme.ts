const mq = (size: number): string =>
  `@media screen and (min-width: ${size}px)`;

const reverseColors = (colors: INamesAppThemeColorVariants) =>
  Object.entries(colors)
    .reduce((acc, [color, variants]) => ({
      ...acc,
      [color]: [...variants].reverse()
    }), {}) as INamesAppThemeColorVariants;

const base = {
  breakpoints: {
    mobile: mq(800),
    desktop: mq(1000)
  },
  fonts: {
    primary: '18px/1.6 Helvetica, Arial, sans-serif',
    secondary: `bold 18px/1.6 Georgia, sans-serif`
  },
};

// light -> dark
const colors: INamesAppThemeColorVariants = {
  red: ['tomato', 'firebrick', 'maroon'],
  green: ['mediumseagreen', 'forestgreen', 'darkgreen'],
  blue: ['dodgerblue', 'royalblue', 'midnightblue'],
  gray: ['floralwhite', 'lightgray', 'slategray', 'darkslategray'],
  yellow: ['khaki', 'gold', 'darkgoldenrod'],
};

export const light: INamesAppTheme = {
  ...base,
  color: {
    ...colors,
    text: {
      primary: colors.gray[3],
      secondary: colors.blue[2],
    },
    background: {
      primary: colors.gray[0],
      secondary: colors.green[0]
    },
  }
};

export const dark: INamesAppTheme = {
  ...base,
  color: {
    ...reverseColors(colors),
    text: {
      primary: colors.gray[0],
      secondary: colors.gray[0],
    },
    background: {
      primary: colors.gray[3],
      secondary: colors.blue[2]
    },
  }
}