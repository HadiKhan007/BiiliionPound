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
import {useSelector} from 'react-redux';

const ActivityTab = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const {event_detail} = useSelector(state => state?.event);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Event Activities'}
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
        {index == 0 ? (
          <View style={{flex: 1}}>
            <FlatList
              data={event_detail?.all_activites}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={spacing.py2}>
                    <ActivityCard
                      name={`${item?.user?.first_name} ${item?.user?.last_name}`}
                      type={item?.exercise?.exercise_type}
                      weight={`${item?.total_lbs} LBS`}
                      excercise={`${item?.repetitions?.length}x ${item?.exercise?.name}`}
                      mode={item?.exercise?.name}
                      cardIcon={
                        item?.exercise?.exercise_image_url
                          ? {uri: item?.exercise?.exercise_image_url}
                          : appImages.sample_exercise
                      }
                    />
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <FlatList
              data={event_detail?.your_activites}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={spacing.py2}>
                    <ActivityCard
                      name={`${item?.user?.first_name} ${item?.user?.last_name}`}
                      type={item?.exercise?.exercise_type}
                      weight={`${item?.total_lbs} LBS`}
                      excercise={`${item?.repetitions?.length}x ${item?.exercise?.name}`}
                      mode={item?.exercise?.name}
                      cardIcon={
                        item?.exercise?.exercise_image_url
                          ? {uri: item?.exercise?.exercise_image_url}
                          : appImages.sample_exercise
                      }
                    />
                  </View>
                );
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ActivityTab;
