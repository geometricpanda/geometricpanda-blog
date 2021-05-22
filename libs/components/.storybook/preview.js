import './theme.css';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/lib/theme-provider';

addDecorator((Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
));

export const parameters = {
  backgrounds: {
    default: 'dark-blue',
    values: [
      {
        name: 'dark',
        value: '#686868',
      },
      {
        name: 'dark-blue',
        value: '#203746',
      },
    ],
  },
};
