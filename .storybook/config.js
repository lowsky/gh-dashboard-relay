import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

function loadStories() {
  require('../stories/index.stories');
}

configure(loadStories, module);
