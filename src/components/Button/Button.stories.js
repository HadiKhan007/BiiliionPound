import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import IconButton from './Button';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('IconButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => (
    <IconButton
      onPress={action('clicked-text')}
      isLoading={false}
      withRightIcon={true}
      title={'Join'}
    />
  ));