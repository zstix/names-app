// TODO: fonts
// TODO: light theme
// TODO: darkt theme

const mq = (size: number): string =>
  `@media screen and (min-width: ${size}px)`;

const baseTheme = {
  breakpoints: {
    mobile: mq(800),
    desktop: mq(1000)
  },
  fonts: {
    primary: '18px/1.6 Helvetica, sans-serif'
  }
};

export const light: INamesAppTheme = {
  ...baseTheme,
  color: {
    text: {
      primary: '#33e',
      secondary: '#666',
    },
    background: {
      primary: '#eee',
      secondary: '#ccc'
    }
  }
};