import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './styles';
import {
  AppHeader,
  DeleteItemModal,
  NotificationCard,
  ParaBox,
} from '../../../../components';
import {appIcons, colors} from '../../../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
const NotificationList = () => {
  const deleteModalRef = useRef(null);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Notification'} />
        <View style={styles.itemContainer}>
          <FlatList
            data={[1, 2]}
            renderItem={({item}) => {
              return (
                <NotificationCard
                  profileImage={'https://unsplash.it/400/400?image=1'}
                  title={'Hey, it’s time for lunch'}
                  subtitle={'About 3m ago'}
                  onPressThreeDots={() => {
                    deleteModalRef?.current?.show();
                  }}
                />
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
          />
        </View>
      </View>

      <DeleteItemModal
        show={deleteModalRef}
        onPressHide={() => {
          deleteModalRef?.current?.hide();
        }}
        bgColor={colors.white}
        borderleftRadius={10}
        borderRightRadius={10}
      />
    </SafeAreaView>
  );
};

export default NotificationList;
