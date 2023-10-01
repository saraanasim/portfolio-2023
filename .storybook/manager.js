import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://saraanasim.github.io/portfolio-2023/icon.svg',
    brandTitle: 'Saraan Asim Components',
    brandUrl: 'https://saraanasim.github.io/portfolio-2023',
  },
});
