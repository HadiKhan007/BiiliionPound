import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  AppHeader,
  Button,
  HomeCircle,
  OngoingEventDetailCard,
  OngoingItem,
  Title,
} from '../../../../components';
import {
  appIcons,
  colors,
  HP,
  profile_uri,
  WP,
} from '../../../../shared/exporter';
import {Divider} from 'react-native-elements';
import {useSelector} from 'react-redux';
import moment from 'moment';

const OngoingEventDetail = ({navigation}) => {
  const {ongoing_event_detail} = useSelector(state => state.event);

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
              title={ongoing_event_detail?.goal_amount}
              subtitle={'Total Pounds Lifted'}
              onPressAdd={() => {
                navigation?.navigate('ExerciseStack');
              }}
            />
          </View>

          <OngoingEventDetailCard
            title={'Military Press'}
            subTitle={'0 LBS'}
            price={ongoing_event_detail?.price}
            liftedAmount={ongoing_event_detail?.goal_amount}
            onPressCard={() => navigation.navigate('ActivityTab')}
            date={moment(ongoing_event_detail?.start_date).format(
              'ddd, Do MMMM  YYYY',
            )}
            sutitleDate={
              moment(ongoing_event_detail?.start_date).format('LT') +
              ' - ' +
              moment(ongoing_event_detail?.end_date).format('LT')
            }
            teams={ongoing_event_detail?.teams}
          />
          {ongoing_event_detail?.users.length > 1 ? (
            <>
              <OngoingItem
                users_lists={ongoing_event_detail?.users}
                title={`${ongoing_event_detail?.users.length} People enrolled`}
                title_part={''}
                titleStyle={styles.countStyle}
                imageHeight={44}
                imageWidth={44}
                width={'46%'}
              />
              <Title title={'Participants'} isLeft />

              <FlatList
                data={ongoing_event_detail?.users}
                renderItem={({item}) => {
                  return (
                    <View style={styles.cardContainer}>
                      <View
                        style={{flexDirection: 'row', marginBottom: HP('1')}}>
                        <View style={styles.cardLeftContainer}>
                          <Image
                            source={{uri: item?.profile_image || profile_uri}}
                            style={styles.icon44}
                          />
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={styles.titleStyle}>{item.name}</Text>
                          <Text style={styles.subtitleStyle}>
                            Lifted Amount :
                            <Text style={[styles.subtitleBoldStyle]}>
                              {item.liftedAmount || 0}
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
            </>
          ) : null}

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
