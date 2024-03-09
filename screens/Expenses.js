import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

const Expenses = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleExpense = () => {
    setExpenses(prevExpenses => [...prevExpenses, { name: expenseName, amount: expenseAmount, date: new Date() }]);
    setExpenseName('');
    setExpenseAmount('');
  }

  return (
    <View>
      <Navbar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Expense</Text>
        <TouchableOpacity onPress={() => setShowInputs(!showInputs)}>
          <Image source={require('../assets/expenses.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {showInputs &&
        <View>
          <TextInput style={styles.input} placeholder="Expense Name" value={expenseName} onChangeText={setExpenseName} />
          <TextInput style={styles.input} placeholder="Expense Amount" value={expenseAmount} onChangeText={setExpenseAmount} keyboardType="numeric" />
          <TouchableOpacity onPress={handleExpense}>
            <Text>Add Expense</Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item.name}: {item.amount} (Spent on {item.date.toLocaleDateString()})</Text>
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

export default Expenses;
