import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text} from 'react-native';
import IconButton from './IconButton';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('IconButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('test', () => (
    <IconButton
      onPress={action('clicked-text')}
      isLoading={true}
      withIcon={false}>
      <Text>{text('Button text', 'Hello test Button')}</Text>
    </IconButton>
  ))
  .add('test without touch', () => (
    <IconButton
      onPress={action('clicked-emoji')}
      isLoading={false}
      withIcon={true}>
      <Text>😀 😎 👍 💯</Text>
    </IconButton>
  ));
