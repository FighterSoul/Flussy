import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

const Expenses = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [expenses, setExpenses] = useState([]);

  // Calculate total expense amount
  const totalExpense = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  const handleExpense = () => {
    setExpenses(prevExpenses => [...prevExpenses, { name: expenseName, amount: expenseAmount, date: new Date() }]);
    setExpenseName('');
    setExpenseAmount('');
  }

  const handleDeleteExpense = (index) => {
    setExpenses(prevExpenses => {
      const updatedExpenses = [...prevExpenses];
      updatedExpenses.splice(index, 1);
      return updatedExpenses;
    });
  }

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.titleContainer}>
        {/* Display total expense amount */}
        <Text style={styles.totalAmount}>Total: {totalExpense.toFixed(3)} TND</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => setShowInputs(!showInputs)} style={styles.actionButton}>
          <Text style={styles.title}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowInputs(!showInputs)} style={styles.actionButton}>
          <Image source={require('../assets/expenses.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {showInputs &&
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Expense Name" value={expenseName} onChangeText={setExpenseName} />
          <TextInput style={styles.input} placeholder="Expense Amount" value={expenseAmount} onChangeText={setExpenseAmount} keyboardType="numeric" />
          <TouchableOpacity onPress={handleExpense} style={styles.addButton}>
            <Image source={require('../assets/check.png')} style={styles.checkIcon} />
          </TouchableOpacity>
        </View>
      }
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item.name}: {item.amount} (Spent on {item.date.toLocaleDateString()})</Text>
            <TouchableOpacity onPress={() => handleDeleteExpense(index)}>
              <Image source={require('../assets/delete.png')} style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'grey',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'grey',
  },
  inputContainer: {
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
  addButton: {
    alignItems: 'center',
  },
  checkIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  deleteIcon: {
    width: 30,
    height: 30,
  },
  icon: {
    width: 60,
    height: 60,
  },
  actionButton: {
    marginHorizontal: 10,
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

export default Expenses;
