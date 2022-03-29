import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {ActivityCard, AppHeader} from '../../../../components';
import {
  appIcons,
  appImages,
  colors,
  HP,
  spacing,
  WP,
} from '../../../../shared/exporter';

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
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Military Press'}
          titleColor={colors.b7}
          icon={appIcons.backArrow}
        />
        <View style={styles.containerTab}>
          <TouchableOpacity
            onPress={() => {
              setIndex(0);
            }}
            style={[styles.leftTab]}>
            <Text
              style={[
                styles.tabTextStyle,
                {
                  color: index == 0 ? colors.p1 : colors.g1,
                },
              ]}>
              All Activity
            </Text>
            <View
              style={[
                styles.leftTabbar,
                {
                  borderBottomWidth: index == 0 ? 2 : 0,
                },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIndex(1);
            }}
            style={styles.rightTab}>
            <Text
              style={[
                styles.tabTextStyle,
                {
                  color: index == 1 ? colors.p1 : colors.g1,
                },
              ]}>
              Your Activity
            </Text>
            <View
              style={[
                styles.rightTabbar,
                {
                  borderBottomWidth: index == 1 ? 2 : 0,
                },
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
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
        </View>
      </View>

      {/* <TabView.Item style={{backgroundColor: 'red'}}>
          <Text>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue'}}>
          <Text>Favorite</Text>
        </TabView.Item> */}
    </SafeAreaView>
  );
};

export default ActivityTab;
