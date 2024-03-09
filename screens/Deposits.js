import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

const Deposits = () => {
  const [depositName, setDepositName] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [deposits, setDeposits] = useState([]);

  const handleDeposit = () => {
    setDeposits(prevDeposits => [...prevDeposits, { name: depositName, amount: depositAmount, date: new Date() }]);
    setDepositName('');
    setDepositAmount('');
  }

  return (
    <View>
      <Navbar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add money</Text>
        <TouchableOpacity onPress={() => setShowInputs(!showInputs)}>
          <Image source={require('../assets/deposit.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {showInputs &&
        <View>
          <TextInput style={styles.input} placeholder="Deposit Name" value={depositName} onChangeText={setDepositName} />
          <TextInput style={styles.input} placeholder="Deposit Amount" value={depositAmount} onChangeText={setDepositAmount} keyboardType="numeric" />
          <TouchableOpacity onPress={handleDeposit}>
            <Text>Add Deposit</Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
        data={deposits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item.name}: {item.amount} (Deposited on {item.date.toLocaleDateString()})</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'grey',
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  item: {
    fontSize: 18,
  },
});

export default Deposits;
