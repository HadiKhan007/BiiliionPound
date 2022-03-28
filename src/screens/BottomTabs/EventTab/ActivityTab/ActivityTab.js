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
  ActivityCard,
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
import {
  appIcons,
  appImages,
  colors,
  HP,
  spacing,
  WP,
} from '../../../../shared/exporter';
import {Divider, Tab, TabView} from 'react-native-elements';
import {cps} from 'redux-saga/effects';

const ActivityTab = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
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

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headerStyle}>
        <AppHeader
          title={'Military Press'}
          titleColor={colors.b7}
          icon={appIcons.backArrow}
        />
      </View>

      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: colors.p1,
          height: 3,
          width: '40%',
          alignItems: 'center',
        }}
        containerStyle={{backgroundColor: colors.white}}
        variant={colors.p1}>
        <Tab.Item
          title="My Activity"
          titleStyle={{
            fontSize: 12,
            color: colors.p1,
            backgroundColor: colors.white,
          }}
          //   style={{color: colors.p1, backgroundColor: colors.white}}
          buttonStyle={active => {
            backgroundColor: colors.white;
          }}
        />
        <Tab.Item
          title="Your Activity"
          titleStyle={{
            fontSize: 12,
            color: colors.p1,
            backgroundColor: colors.white,
          }}
          //   style={{color: colors.p1, backgroundColor: colors.white}}
          buttonStyle={active => {
            backgroundColor: colors.white;
          }}
        />
      </Tab>

      <TabView value={0} onChange={setIndex} animationType="spring">
        <TabView.Item style={{flex: 1, width: '100%'}}>
          <FlatList
            data={[1, 2, 3, 4]}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={spacing.py2}>
                  <ActivityCard
                    name={'John Doe'}
                    type={'Shoulder'}
                    weight={'150LBS'}
                    excercise={'2x Front Raises'}
                    mode={'Front Raises'}
                    cardIcon={appImages.sample_exercise}
                  />
                </View>
              );
            }}
          />
        </TabView.Item>
        {/* <TabView.Item style={{flex: 1, width: '100%'}}>
          <FlatList
            data={[1, 2, 3, 4]}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={spacing.py2}>
                  <ActivityCard
                    name={'John Doe'}
                    type={'Shoulder'}
                    weight={'150LBS'}
                    excercise={'2x Front Raises'}
                    mode={'Front Raises'}
                    cardIcon={appImages.sample_exercise}
                  />
                </View>
              );
            }}
          />
        </TabView.Item> */}
        {/* <TabView.Item style={{backgroundColor: 'red'}}>
          <Text>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue'}}>
          <Text>Favorite</Text>
        </TabView.Item> */}
      </TabView>
    </SafeAreaView>
  );
};

export default ActivityTab;
