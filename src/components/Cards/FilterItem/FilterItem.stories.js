import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import FilterItem from './FilterItem';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('FilterItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('FilterItem', () => <FilterItem title="Full Body" selected />);
