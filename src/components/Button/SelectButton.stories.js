import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import SelectButton from './SelectButton';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('SelectButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => <SelectButton />);
