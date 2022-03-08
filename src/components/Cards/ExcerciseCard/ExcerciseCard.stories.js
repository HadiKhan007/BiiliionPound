import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import ExcerciseCard from './ExcerciseCard';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('ExcerciseCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('ExcerciseCard', () => (
    <ExcerciseCard name="Arnold Press" type="Shoulder" />
  ));
