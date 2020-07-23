import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ContactsList from '../ContactsList'
import { connect } from 'react-redux'

class ContactsListScreen extends React.Component {
    /*  constructor () {
      super()
      this.state = {
        contacts: [],
      }
    }*/  

    state = {
        showContacts: true,
    }

    toggleContacts = () => {
      this.setState({ showContacts: !this.state.showContacts })
    }
  
    render() {
      return (
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.toggleContacts}>
            <Text style={styles.buttonText}>Toggle Contact</Text>
          </TouchableOpacity>
        </View>
          {this.state.showContacts && <ContactsList contacts={this.props.contacts} onSelectContact={(contact)=> {this.props.navigation.navigate('ContactDetail', {
            name: contact.name,
            phone: contact.phone,
          })}} />}
      </View> 
      )
    }
  }

  const mapStateToProps = state => ({
    contacts: state.contacts,
  })

  export default connect(mapStateToProps)(ContactsListScreen)

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 10,
      paddingBottom: 10
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