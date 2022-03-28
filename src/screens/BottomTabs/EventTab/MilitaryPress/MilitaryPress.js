import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
    AppHeader,
    HomeCircle,
    OngoingEventCard,
    OngoingItem,
    PrimaryHeading,
    UpcomingEventCard,
} from '../../../../components';
import { appIcons, colors, spacing } from '../../../../shared/exporter';

const MilitaryPress = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.headerStyle}>
                <AppHeader
                    title={'Military Press'}
                    titleColor={colors.b7}
                    icon={appIcons.backArrow}
                />
            </View>
            <View style={styles.itemView}>
                <HomeCircle
                    // icon={appIcons.plus}
                    title={'5,722'}
                    subtitle={'Total Pounds Lifted'}
                    onPressAdd={() => {
                        navigation?.navigate('ExerciseStack');
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default MilitaryPress;
