import React, { useState } from 'react';
import { View, Image, StyleSheet, Animated, Text, Pressable } from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png';
import Settings from '../screens/Settings';
import Notes from '../screens/Notes';
import Analytics from '../screens/Analytics';
import AppNavigator from './AppNavigator';


const Navbar = () => {
  const navigation = useNavigation();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const navigateToScreen = (screenName) => {
    toggleSideNav();
    navigation.navigate(screenName);
  };

  const buttonPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const buttonPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Header
        containerStyle={styles.header}
        leftComponent={
          <Pressable
            onPress={() => {
              toggleSideNav();
              buttonPressIn();
            }}
            onPressOut={buttonPressOut}
            style={[styles.iconContainer, { marginRight: 10 }]}
          >
            <Animated.Image
              source={require('../assets/menu.png')}
              style={[styles.icon, { transform: [{ scale: scaleValue }] }]}
            />
          </Pressable>
        }
        centerComponent={          
          <View style={styles.centerComponent}>
            <Image source={logo} style={styles.logo} />
          </View>
        }
        rightComponent={
          <Pressable
            onPressIn={buttonPressIn}
            onPressOut={buttonPressOut}
            style={styles.iconContainer}
          >
            <Animated.Image
              source={require('../assets/notificationBell.png')}
              style={[styles.icon, { transform: [{ scale: scaleValue }] }]}
            />
          </Pressable>
        }
      />
      {isSideNavOpen && (
        <View style={styles.sideNav}>
          <Pressable
            onPressIn={buttonPressIn}
            onPressOut={buttonPressOut}
            style={styles.sideNavItem}
            onPress={() => navigateToScreen('Settings')}
          >
            <View style={styles.iconContainer}>
              <Image source={require('../assets/settings.png')} style={styles.sideNavLogo} />
            </View>
            <Text style={styles.sideNavText}>Settings</Text>
          </Pressable>
          <Pressable
            onPressIn={buttonPressIn}
            onPressOut={buttonPressOut}
            style={styles.sideNavItem}
            onPress={() => navigateToScreen('Analytics')}
          >
            <View style={styles.iconContainer}>
              <Image source={require('../assets/analytics.png')} style={styles.sideNavLogo} />
            </View>
            <Text style={styles.sideNavText}>Analytics</Text>
          </Pressable>
          <Pressable
            onPressIn={buttonPressIn}
            onPressOut={buttonPressOut}
            style={styles.sideNavItem}
            onPress={() => navigateToScreen('Notes')}
          >
            <View style={styles.iconContainer}>
              <Image source={require('../assets/notes.png')} style={styles.sideNavLogo} />
            </View>
            <Text style={styles.sideNavText}>Notes</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  sideNav: {
    position: 'absolute',
    top: 110,
    left: 10,
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    zIndex: 100,
  },
  sideNavItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sideNavLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  sideNavText: {
    marginLeft: 10,
    fontSize: 12,
  },
  logo: {
    width: 80,
    height: 80,
  },
});

export default Navbar;
