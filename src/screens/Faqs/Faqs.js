import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {AppHeader, ParaBox} from '../../components';
import {appIcons} from '../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
import {ListItem} from 'react-native-elements';
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
const Faqs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Faqs'} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={faq_list}
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
                        faq_list[index].expanded
                          ? appIcons.minus
                          : appIcons.plus
                      }
                    />
                    <ListItem.Content style={{backgroundColor: 'white'}}>
                      <ListItem.Title style={styles.titleStyle}>
                        {item?.title}
                      </ListItem.Title>
                    </ListItem.Content>
                  </View>
                }
                isExpanded={faq_list[index].expanded}
                onPress={() => {
                  setExpanded(!expanded);
                  faq_list[index].expanded = !faq_list[index].expanded;
                }}>
                {faq_list[index].expanded ? (
                  <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleStyle}>{item?.body}</Text>
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

export default Faqs;
