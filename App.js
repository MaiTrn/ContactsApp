import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import AddContactScreen from './Screens/AddContactScreen'
import ContactListScreen from './Screens/ContactListScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen'
import SettingsScreen from './Screens/SettingsScreen'
import LoginScreen from './Screens/LoginScreen'
import contacts from './Contacts'
import store from './Redux/store'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function ContactsNavigator() {
  return (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen name='Main' component={ContactListScreen} options={({navigation}) => ({
      headerTitle: 'Contacts',
      headerTintColor: '#BA2020',
      headerRight: () => (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddContact')}>
          <Text style={styles.buttonText}>Add Contact</Text>
        </TouchableOpacity>
      )})
    }/>
    <Stack.Screen name='AddContact' component={AddContactScreen} options={{
      headerTitle: 'New Contact',
      headerTintColor: '#BA2020',      
    }} />

    <Stack.Screen name='ContactDetail' component={ContactDetailScreen} option={{
      headerTitle: 'Contact Detail',
      headerTintColor: '#BA2020',
    }}/>
    </Stack.Navigator>
)}

function TabNavigator() {
  return (
    <Tab.Navigator 
      tabBarOptions = {{
        keyboardHidesTabBar: true,
        activeTintColor: '#BA2020',
        inactiveTintColor: 'gray',
        label: {
          fontSize: 12,
          marginBottom: 5,
        },
        style: {
          borderTopWidth: 0,
        }
      }}
      screenOptions= {({route}) => ({
        tabBarIcon: ({focused, color }) => {
          let iconName

          if (route.name === 'Contacts') {
            iconName = focused? 'account-circle' : 'account-circle-outline'
          }
          else if (route.name === 'Settings') {
            iconName = focused? 'settings' : 'settings-outline'
          }
          return <Icon name={iconName} size={25} color={color}/>
        }
      })}
    
    >
      <Tab.Screen name='Contacts' component={ContactsNavigator}/>
      <Tab.Screen name='Settings' component={SettingsScreen}/>
    </Tab.Navigator>
  )
}

function AppNavigator() {
  return (
  <Stack.Navigator initialRouteName="Login" screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Login" component={LoginScreen} options={{
    }}/>
    <Stack.Screen name="Tabs" component={TabNavigator}/>
  </Stack.Navigator>
  )
}


export default class App extends React.Component {
 /* state = {
    contacts,
  }

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, {key: contacts.length,...newContact}]
    }))
  }
  */

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />  
        </NavigationContainer>
      </Provider> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: Constants.statusBarHeight,
    flex: 1,
  },

  buttonContainer: {
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    height: 25,
    backgroundColor:'white',
  },

  buttonText: {
    color: '#BA2020',
    fontSize: 17,
  },

});
