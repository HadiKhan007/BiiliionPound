import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  OngoingItem,
  EventInfoCard,
  Button,
  CategorySelection,
  AddNewExercise,
} from '../../../../components';
import {
  appIcons,
  colors,
  filterTeam,
  spacing,
} from '../../../../shared/exporter';
import ReadMore from 'react-native-read-more-text';

const EventDetail = ({navigation}) => {
  const [selectionModal, setSelectionModal] = useState(false);
  const [selectCategoryItem, setselectCategoryItem] = useState(null);
  //References
  const joinSheetRef = useRef(null);

  const _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.readMoreStyle} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.unreadStyle} onPress={handlePress}>
        Show less
      </Text>
    );
  };
  const onEndSelection = () => {
    setSelectionModal(false);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Event Details'}
          titleColor={colors.white}
          icon={appIcons.backArrow}
        />
        <View style={styles.itemConatiner}>
          <View style={styles.firstConatiner}>
            <View style={styles.headerContainer}>
              <OngoingItem
                titleStyle={styles.countStyle}
                imageHeight={35}
                imageWidth={35}
                title={'+20 Going'}
              />
            </View>
          </View>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{paddingVertical: 20}}>
            <View style={{marginTop: 30}}>
              <EventInfoCard />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.titleStyle}>Select Team</Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectionModal(true);
                }}
                style={styles.btnContainer}>
                <Text
                  style={[
                    styles.btnText,
                    {color: selectCategoryItem ? colors.p1 : colors.b1},
                  ]}>
                  {selectCategoryItem?.title || 'All Team'}
                </Text>
                <Image source={appIcons.rightIcon} style={styles.inputIcon} />
              </TouchableOpacity>
            </View>

            <View style={[styles.inputContainer, spacing.py3]}>
              <Text style={styles.titleStyle}>About The Event</Text>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
                onReady={() => {
                  console.log('hello');
                }}>
                <Text style={styles.description}>
                  Enjoy your favorite game and a lovely your friends and family
                  and have a great time. Food local food trucks will be
                  available for purchase. Enjoy your favorite game and a lovely
                  your friends and family and have a great time. Food local food
                  trucks will be available for purchase. Enjoy your favorite
                  game and a lovely your friends and family and have a great
                  time. Food local food trucks will be available for
                  purchase.Read More...
                </Text>
              </ReadMore>
            </View>
            <View style={styles.btnAlign}>
              <Button
                onPress={() => {
                  joinSheetRef?.current?.show();
                }}
                title={'Join'}
                withRightIcon={true}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      {selectionModal && (
        <CategorySelection
          data={filterTeam}
          setSelectItem={item => {
            setselectCategoryItem(item);
          }}
          selectItem={selectCategoryItem}
          title={'Category'}
          show={selectionModal}
          onPressHide={() => {
            setSelectionModal(false);
          }}
          onPressDone={onEndSelection}
        />
      )}
      <AddNewExercise
        show={joinSheetRef}
        onPressHide={() => {
          joinSheetRef?.current?.hide();
          navigation?.navigate('Payment');
        }}
        onAddPress={() => {
          joinSheetRef?.current?.hide();
          navigation?.navigate('AddNewExercise');
        }}
        bgColor={colors.gr1}
        textColor={colors.white}
        title={'Already Joined 5 Days to go'}
        nodeColor={colors.gr1}
        borderRightRadius={20}
        borderleftRadius={20}
      />
    </SafeAreaView>
  );
};

export default EventDetail;
