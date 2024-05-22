import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
   
        <Navbar />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
  },
});

export default Home;