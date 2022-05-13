import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    base: 'light',
    brandTitle: 'Blakes Standard Library',
    brandUrl: '#'
  }
});
