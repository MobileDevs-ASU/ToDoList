import React from 'react';
import { ScrollView, TextInput, Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import  { LinearGradient } from 'expo';
import ToDoList from './components/TodoList';


export default class App extends React.Component {
  state = {
  newTodoItem:'' 
};

  newTodoItemController = textValue => {
  this.setState({
    newTodoItem: textValue
  });
};

  render() {
    return (
      <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.appTitle}>Minimalist ToDo App</Text>
         <View style={styles.card}>
         <ScrollView contentContainerStyle={styles.listContainer}>
          <TextInput
              style={styles.input}
              placeholder={'Add an item!'}
              value={this.newTodoItem}
              onChangeText={this.newTodoItemController}
              placeholderTextColor={'#999'}
              returnKeyType={'done'}
              autoCorrect={false}
          />
          <ToDoList />
          </ScrollView>
        </View>
      </LinearGradient>   
    );
  }
}

const {heigh, width } = Dimensions.get('window');

const styles = StyleSheet.create({
container: {
  flex: 1,
  // backgroundColor: '#f23657',
  alignItems: 'center',
  // justifyContent: 'center'
  },

appTitle: {
  color:'#fff',
  fontSize: 36,
  marginTop: 60,
  marginBottom: 30,
  fontWeight: '300'
  },

card: {
  backgroundColor: '#fff',
  flex: 1,
  width: width - 25,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  },

input: {
  padding: 20,
  borderBottomColor: '#bbb',
  borderBottomWidth: 1,
  fontSize: 24
},

listContainer: {
  alignItems: 'center'
}

});