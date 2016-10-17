import { configure } from '@kadira/storybook';
import '../app/scss/main.scss';

function loadStories() {
  require('../app/scripts/components/stories/header');
  // require as many stories as you need.
}

configure(loadStories, module);