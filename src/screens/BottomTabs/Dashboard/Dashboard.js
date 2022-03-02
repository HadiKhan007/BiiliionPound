import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../../redux/actions/index';
import {colors, family} from '../../../shared/exporter';

const Home = ({params}) => {
  const dispatch = useDispatch(null);
  const loginHandler = () => {
    const params = new FormData();
    params.append('identifier', '+923044228401');
    params.append('password', 123456);
    dispatch(
      loginRequest(
        params,
        res => {},
        res => {},
      ),
    );
  };
  return (
    <View>
      <Text style={{color: colors.p1, fontFamily: family.OpenSans_ExtraBold}}>
        Home
      </Text>
      <Button
        onPress={() => {
          loginHandler();
        }}
        title={'Login'}
      />
    </View>
  );
};

export default Home;
