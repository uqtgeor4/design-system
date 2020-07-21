import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import scripts
import header from '@uqmchu/header/src/js/header.es6';
import mainMenu from '@uqmchu/main-menu/src/js/main-menu.es6';
import accordion from '@uqmchu/accordion/src/js/accordion.es6';
import gridMenuEqualiser from '@uqmchu/grid-menu/src/js/grid-menu';

// import HTML template strings
import kitchenSinkHTML from './kitchen-sink.html';

export default {
  title: 'Introduction/Showcase',
  decorators: [expandedStory]
};

export const kitchenSink = () => {
  useEffect(() => {
    new header();
    new mainMenu();
    new accordion();
    var equaliseGridMenu = new gridMenuEqualiser('.grid-menu--equalised>a');
    equaliseGridMenu.align(); 
  });
  return kitchenSinkHTML;
};
