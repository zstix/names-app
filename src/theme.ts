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
  gray: ['lightgray', 'gray', 'dimgray'],
  yellow: ['khaki', 'gold', 'darkgoldenrod'],
};

// TODO: theme colors for fonts and backgrounds
export const light: INamesAppTheme = {
  ...base,
  color: {
    ...colors,
    text: {
      primary: '#333',
      secondary: '#666',
    },
    background: {
      primary: '#eee',
      secondary: '#ccc'
    },
  }
};

export const dark: INamesAppTheme = {
  ...base,
  color: {
    ...reverseColors(colors),
    text: {
      primary: '#333',
      secondary: '#666',
    },
    background: {
      primary: '#eee',
      secondary: '#ccc'
    },
  }
}