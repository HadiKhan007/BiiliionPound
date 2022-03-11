import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {appIcons, colors, family, HP, size, WP} from '../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';

export const BottomTab = ({state, descriptors, navigation}) => {
  const [tab, setTab] = useState('Home');
  const setSelectedTab = (tabName, index) => {
    if (state?.routes[index]?.name === tabName) {
      setTab(state?.routes[index]?.name);
      navigation.emit({
        type: 'tabPress',
        target: state?.routes[index]?.key,
        canPreventDefault: true,
      });
      navigation.navigate({name: state?.routes[index]?.name, merge: true});
    }
  };

  const data = [
    {
      id: 1,
      title: 'Home',
      icon: appIcons.home,
      style: styles.homeImageStyle,
    },
    {
      id: 1,
      title: 'Activity',
      icon: appIcons.event,
      style: styles.activityImageStyle,
    },
    {
      id: 1,
      title: 'Event',
      icon: appIcons.board,
      style: styles.eventImageStyle,
    },
    {
      id: 1,
      title: 'Profile',
      icon: appIcons.profile,
      style: styles.profileImageStyle,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.tabContainer}>
              <View
                style={[
                  styles.borderStyle,
                  {borderTopWidth: item?.title == tab ? 4 : 0},
                ]}>
                <TouchableOpacity
                  onPress={() => setSelectedTab(item?.title, index)}
                  style={styles.aicenter}>
                  <Image
                    source={item.icon}
                    style={[
                      item?.style,
                      {
                        tintColor: item?.title === tab ? colors.p1 : colors.g1,
                      },
                    ]}
                  />
                  <Text
                    style={[
                      styles.textStyle,
                      {
                        color: item?.title === tab ? colors.p1 : colors.g1,
                      },
                    ]}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: HP('10'),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImageStyle: {
    height: 16,
    width: 18,
    resizeMode: 'contain',
  },

  activityImageStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  eventImageStyle: {
    height: 20,
    width: 16,
    resizeMode: 'contain',
  },
  profileImageStyle: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },

  textStyle: {
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
    marginTop: 10,
  },
  borderStyle: {
    borderColor: colors.p1,
    height: HP('10'),
    width: WP('14'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    height: HP('10'),
    width: WP('25'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  aicenter: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HP('10'),
    width: WP('25'),
  },
});
