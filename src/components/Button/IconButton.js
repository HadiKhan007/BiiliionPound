import React from 'react';
import PropTypes from 'prop-types';
// import {colors, WP, size, family, HP} from '_utilities';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';

export default function IconButton({onPress, children, isLoading, withIcon}) {
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        // { backgroundColor }, style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator
          animating
          color={'red'}
          // color={loaderColor ? loaderColor : colors.white}
        />
      ) : (
        <View style={styles.row}>
          {withIcon && (
            <Image
              source={{
                uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fpanda&psig=AOvVaw0DJRxtTGxoRXfNoU3qSSio&ust=1646306440787000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOj2tMenp_YCFQAAAAAdAAAAABAD',
              }}
              style={[
                styles.icon,
                // { tintColor: iconColor, height: iconSize }
              ]}
              resizeMode={'contain'}
            />
          )}
          <Text
            style={[
              styles.submitButtonText,
              // { color: titleColor }
            ]}>
            {children}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

IconButton.defaultProps = {
  children: null,
  onPress: () => {},
  isLoading: false,
  withIcon: false,
};

IconButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  withIcon: PropTypes.bool,
};

// import React from 'react';
// import {View, Image} from 'react-native';
// import {Loader} from '../Loader';
// import {colors, WP, size, family, HP} from '_utilities';
// import {TouchableOpacity, StyleSheet, Text} from 'react-native';
// import {ActivityIndicator} from 'react-native';

// export default function IconButton({
//   isLoading,
//   onSubmit,
//   title,
//   titleStyle,
//   loaderColor,
//   icon,
//   backgroundColor,
//   style,
//   iconColor,
//   titleColor,
//   iconSize = HP(3),
//   withIcon = true,
// }) {
//   return (
//     <TouchableOpacity
//       style={[styles.submitButton, {backgroundColor}, style]}
//       onPress={onSubmit}
//       activeOpacity={0.8}
//       disabled={isLoading}>
//       {isLoading ? (
//         <ActivityIndicator
//           animating
//           color={loaderColor ? loaderColor : colors.white}
//         />
//       ) : (
//         // <Loader color={loaderColor ? loaderColor : colors.white} />
//         <View style={styles.row}>
//           {withIcon && (
//             <Image
//               source={icon}
//               style={[styles.icon, {tintColor: iconColor, height: iconSize}]}
//               resizeMode={'contain'}
//             />
//           )}
//           <Text style={[styles.submitButtonText, {color: titleColor}]}>
//             {title}
//           </Text>
//         </View>
//       )}
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: 'lightgreen',
    // height: 22,
    width: 50,
    // backgroundColor: colors.p1,
    // height: WP('12'),
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  submitButtonText: {
    color: 'white',

    // color: colors.white,
    // fontFamily: family.Montserrat_Medium,
    // fontSize: size.xsmall,
    textAlign: 'center',
  },
  icon: {
    width: 5,
    height: 5,
    // right: WP(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
