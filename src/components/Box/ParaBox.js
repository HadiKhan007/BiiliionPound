import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';

export const ParaBox = () => {
  return (
    <View style={styles.paraStyle}>
      <Text style={styles.firstParaText}>
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paraStyle: {flex: 1, marginBottom: WP('10')},

  firstParaText: {
    color: colors.b1,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.tiny,
    lineHeight: 24,
  },
});
