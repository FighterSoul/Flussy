import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated, Text } from 'react-native';
import { Header } from 'react-native-elements';

const Navbar = () => {
  // Define animated value for button press animation
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const buttonPressIn = () => {
    // Scale animation when button is pressed
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const buttonPressOut = () => {
    // Reset scale to default when button press is released
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Header
      containerStyle={styles.header}
      leftComponent={
        <TouchableOpacity
          onPressIn={buttonPressIn}
          onPressOut={buttonPressOut}
          style={[styles.iconContainer, { marginRight: 10 }]}
        >
          <Animated.Image
            source={require('../assets/menu.png')}
            style={[styles.icon, { transform: [{ scale: scaleValue }] }]}
          />
        </TouchableOpacity>
      }
      centerComponent={
        <View style={styles.centerComponent}>
          <Text style={styles.title}>Flussy</Text>
        </View>
      }
      rightComponent={
        <TouchableOpacity
          onPressIn={buttonPressIn}
          onPressOut={buttonPressOut}
          style={styles.iconContainer}
        >
          <Animated.Image
            source={require('../assets/notificationBell.png')}
            style={[styles.icon, { transform: [{ scale: scaleValue }] }]}
          />
        </TouchableOpacity>
      }
    />
  );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        borderBottomWidth: 0, // Remove bottom border
        borderRadius: 10, // Add border radius
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Add box shadow
        
        
      },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  centerComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 30,
  },
});

export default Navbar;
