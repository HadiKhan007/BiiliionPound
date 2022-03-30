import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {AppHeader, ParaBox} from '../../components';
import {appIcons, checkConnected} from '../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
import {ListItem} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {getFAQRequest} from '../../redux/actions';
import RenderHtml from 'react-native-render-html';

const faq_list = [
  {
    id: 1,
    title: 'Do I need to workout everyday?',
    body: 'The best home workouts and calisthenics programs from beginner to advanced. Build muscle and strength with our bodyweight tutorials and progressions.',
    expanded: false,
  },
  {
    id: 2,
    title: 'Do I need to workout everyday?',
    body: 'The best home workouts and calisthenics programs from beginner to advanced. Build muscle and strength with our bodyweight tutorials and progressions.',
    expanded: false,
  },
  {
    id: 3,
    title: 'Do I need to workout everyday?',
    body: 'The best home workouts and calisthenics programs from beginner to advanced. Build muscle and strength with our bodyweight tutorials and progressions.',
    expanded: false,
  },
  {
    id: 4,
    title: 'Do I need to workout everyday?',
    body: 'The best home workouts and calisthenics programs from beginner to advanced. Build muscle and strength with our bodyweight tutorials and progressions.',
    expanded: false,
  },
];
const source = {
  html: `
<div><strong>Billion Pound</strong> is mobile app that help you to track your workout life easy and blanaced. You can join events and showoff your weight lifting talent to people.</div>`,
};

const Faqs = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const {faqs} = useSelector(state => state.profile);
  const dispatch = useDispatch(null);

  useFocusEffect(
    useCallback(() => {
      getFAQs();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [navigation]),
  );

  const getFAQs = async () => {
    setLoading(true);
    const checkInternet = await checkConnected();

    const cbSuccess = res => {
      console.log('===============FFFAAAQQSSS=====================');
      console.log(res);
      console.log('====================================');
      setLoading(false);
    };

    const cbFailure = message => {
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(getFAQRequest(cbSuccess, cbFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Faqs'} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={faqs}
          renderItem={({item, index}) => {
            return (
              <ListItem.Accordion
                activeOpacity={1}
                noIcon={true}
                content={
                  <View style={styles.cardContainer}>
                    <Image
                      style={styles.imageStyle}
                      source={
                        faqs[index].expanded ? appIcons.minus : appIcons.plus
                      }
                    />
                    <ListItem.Content style={{backgroundColor: 'white'}}>
                      <ListItem.Title style={styles.titleStyle}>
                        {item?.name}
                      </ListItem.Title>
                    </ListItem.Content>
                  </View>
                }
                isExpanded={faqs[index].expanded}
                onPress={() => {
                  setExpanded(!expanded);
                  faqs[index].expanded = !faqs[index].expanded;
                }}>
                {faqs[index].expanded ? (
                  <View style={styles.subtitleContainer}>
                    <RenderHtml
                      source={{html: `${item.description}`}}
                      contentWidth={Dimensions.get('screen').width}
                    />
                  </View>
                ) : (
                  false
                )}
              </ListItem.Accordion>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

/* <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleStyle}>{item?.name}</Text>
                  </View> */

export default Faqs;
