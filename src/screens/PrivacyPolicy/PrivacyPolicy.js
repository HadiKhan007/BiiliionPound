import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {AppHeader, Loader, ParaBox} from '../../components';
import {appIcons, checkConnected} from '../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {getPrivacyPolicy} from '../../redux/actions';
import RenderHtml from 'react-native-render-html';

const PrivacyPolicy = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {policy} = useSelector(state => state.profile);
  const dispatch = useDispatch(null);

  useFocusEffect(
    useCallback(() => {
      getPolicy();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [navigation]),
  );

  const getPolicy = async () => {
    setLoading(true);
    const checkInternet = await checkConnected();

    const cbSuccess = res => {
      console.log('===============Privacy Policy=====================');
      console.log(res);
      console.log('====================================');
      setLoading(false);
    };

    const cbFailure = message => {
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(getPrivacyPolicy(cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        {loading ? <Loader loading={loading} /> : null}
        <AppHeader icon={appIcons.backArrow} title={'Privacy Policy'} />
        <FlatList
          data={policy}
          renderItem={({item}) => {
            return (
              <View style={styles.paraStyle}>
                <RenderHtml
                  source={{html: `${item?.description}`}}
                  contentWidth={Dimensions.get('screen').width}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
