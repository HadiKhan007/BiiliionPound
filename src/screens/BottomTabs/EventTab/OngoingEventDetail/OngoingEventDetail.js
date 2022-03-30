import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  AppHeader,
  Button,
  HomeCircle,
  OngoingEventDetailCard,
  OngoingEventCard,
  OngoingItem,
  PrimaryHeading,
  Title,
  UpcomingEventCard,
} from '../../../../components';
import {
  appIcons,
  colors,
  HP,
  profile_uri,
  spacing,
  WP,
} from '../../../../shared/exporter';
import {Divider} from 'react-native-elements';

const OngoingEventDetail = ({navigation}) => {
  const data = [
    {
      id: 0,
      name: 'Elexa Andrew',
      liftedAmount: '150 LBS',
      image: profile_uri,
    },
    {
      id: 1,
      name: 'Elexa Andrew',
      liftedAmount: '150 LBS',
      image: profile_uri,
    },
    {
      id: 2,
      name: 'Elexa Andrew',
      liftedAmount: '150 LBS',
      image: profile_uri,
    },
    {
      id: 3,
      name: 'Elexa Andrew',
      liftedAmount: '150 LBS',
      image: profile_uri,
    },
  ];

  console.log(
    'data length----------------------------------------',
    data.length,
  );
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Military Press'}
          titleColor={colors.b7}
          icon={appIcons.backArrow}
        />
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <View style={styles.itemView}>
            <HomeCircle
              title={'5,722'}
              subtitle={'Total Pounds Lifted'}
              onPressAdd={() => {
                navigation?.navigate('ExerciseStack');
              }}
            />
          </View>
          <OngoingEventDetailCard
            title={'Military Press'}
            subTitle={'150 LBS'}
            price={'59.99'}
            liftedAmount={'15000'}
            onPressCard={() => navigation.navigate('ActivityTab')}
          />
          <OngoingItem
            title={'+5 People enrolled'}
            titleStyle={styles.countStyle}
            imageHeight={44}
            imageWidth={44}
            width={'46%'}
          />
          <Title title={'Participants'} isLeft />

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={styles.cardContainer}>
                  <View style={{flexDirection: 'row', marginBottom: HP('1')}}>
                    <View style={styles.cardLeftContainer}>
                      <Image
                        source={{uri: item?.image}}
                        style={styles.icon44}
                      />
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={styles.titleStyle}>{item.name}</Text>
                      <Text style={styles.subtitleStyle}>
                        Lifted Amount :
                        <Text style={[styles.subtitleBoldStyle]}>
                          {item.liftedAmount}
                        </Text>
                      </Text>
                    </View>
                  </View>
                  {data.length - 1 > item.id && (
                    <Divider style={styles.dividerStyle} />
                  )}
                </View>
              );
            }}
          />

          <View style={{alignItems: 'center', marginVertical: WP('2')}}>
            <Button
              title="Participate"
              withRightIcon
              onPress={() => {
                navigation?.navigate('ExerciseStack');
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OngoingEventDetail;
