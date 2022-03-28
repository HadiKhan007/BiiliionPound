import { Platform, StatusBar, StyleSheet } from 'react-native';
import {
    HP,
    WP,
    size,
    family,
    colors,
    scrHeight,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignItems: 'center',
    },
    headerStyle: {
        marginHorizontal: WP('5'),
        marginVertical: HP('2'),
    }
});

export default styles;
