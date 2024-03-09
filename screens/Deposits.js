import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

const Deposits = () => {
  const [depositName, setDepositName] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [deposits, setDeposits] = useState([]);

  // Calculate total deposit amount
  const totalDeposit = deposits.reduce((total, deposit) => total + parseFloat(deposit.amount), 0);

  const handleDeposit = () => {
    setDeposits(prevDeposits => [...prevDeposits, { name: depositName, amount: depositAmount, date: new Date() }]);
    setDepositName('');
    setDepositAmount('');
  }

  const handleDeleteDeposit = (index) => {
    setDeposits(prevDeposits => {
      const updatedDeposits = [...prevDeposits];
      updatedDeposits.splice(index, 1);
      return updatedDeposits;
    });
  }

  return (
    <View>
      <Navbar />
      <View style={styles.titleContainer}>
        {/* Display total deposit amount */}
        <Text style={styles.totalAmount}>Total: {totalDeposit.toFixed(3)} TND</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => setShowInputs(!showInputs)} style={styles.actionButton}>
          <Text style={styles.title}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/deposit.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {showInputs &&
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Deposit Name" value={depositName} onChangeText={setDepositName} />
          <TextInput style={styles.input} placeholder="Deposit Amount" value={depositAmount} onChangeText={setDepositAmount} keyboardType="numeric" />
          <TouchableOpacity onPress={handleDeposit}>
            <Image source={require('../assets/check.png')} style={styles.addIcon} />
          </TouchableOpacity>
        </View>
      }
      <FlatList
        data={deposits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item.name}: {item.amount} (On {item.date.toLocaleDateString()})</Text>
            <TouchableOpacity onPress={() => handleDeleteDeposit(index)}>
              <Image source={require('../assets/delete.png')} style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'grey',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'grey',
  },
  formContainer: {
    alignItems: 'center',
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
    width: 60,
    height: 60,
  },
  actionButton: {
    marginHorizontal: 10,
  },
  addIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  deleteIcon: {
    width: 30,
    height: 30,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
