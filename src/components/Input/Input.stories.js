import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Input from './Input';
import {Icon} from 'react-native-elements';
import CenterView from '../../../storybook/stories/CenterView';
import {colors} from '../../shared/exporter';

storiesOf('Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Input', () => (
    <Input
      secureTextEntry
      placeholder="Password"
      leftIcon={
        <Icon
          type="material-community"
          name="email"
          color={colors.mediumGrey}
          tvParallaxProperties={undefined}
        />
      }
      rightIcon={
        <Icon
          type="entypo"
          name="eye"
          color={colors.mediumGrey}
          tvParallaxProperties={undefined}
        />
      }
    />
  ));
