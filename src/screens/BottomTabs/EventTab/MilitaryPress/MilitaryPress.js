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
  MilitaryPressCard,
  OngoingEventCard,
  OngoingItem,
  PrimaryHeading,
  Title,
  UpcomingEventCard,
} from '../../../../components';
import {appIcons, colors, HP, spacing, WP} from '../../../../shared/exporter';
import {Divider} from 'react-native-elements';

const MilitaryPress = ({navigation}) => {
  const data = [
    {
      id: 0,
      name: 'Elexa Andrew',
      liftedAmount: '150 LBS',
      image: appIcons.user,
    },
    {
      id: 1,
      name: 'Elexa Andrew',
      liftedAmount: '150 LBS',
      image: appIcons.user,
    },
    {
      id: 2,
      name: 'Elexa Andrew',
      liftedAmount: '150 LBS',
      image: appIcons.user,
    },
    {
      id: 3,
      name: 'Elexa Andrew',
      liftedAmount: '150 LBS',
      image: appIcons.user,
    },
  ];

  console.log(
    'data length----------------------------------------',
    data.length,
  );
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headerStyle}>
        <AppHeader
          title={'Military Press'}
          titleColor={colors.b7}
          icon={appIcons.backArrow}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={{
          paddingBottom: HP('1.5'),
          justifyContent: 'center',
          width: Dimensions.get('screen').width,
          padding: 10,
        }}>
        <View style={styles.itemView}>
          <HomeCircle
            title={'5,722'}
            subtitle={'Total Pounds Lifted'}
            onPressAdd={() => {
              navigation?.navigate('ExerciseStack');
            }}
          />
        </View>
        <MilitaryPressCard
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
          width={'65%'}
        />
        <Title title={'Participants'} isLeft />

        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.cardContainer}>
                <View style={{flexDirection: 'row', marginBottom: HP('1')}}>
                  <View style={styles.cardLeftContainer}>
                    <Image source={item.image} style={styles.icon24} />
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={styles.titleStyle}>{item.name}</Text>
                    <Text style={styles.subtitleStyle}>
                      {item.liftedAmount}
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

        <View style={{alignItems: 'center', marginTop: WP('2')}}>
          <Button title="Participate" withRightIcon />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MilitaryPress;
