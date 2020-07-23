import React from 'react'
import { connect } from 'react-redux'

import AddContactForm from '../AddContactForm'
import { addContact } from '../Redux/action'

class AddContactScreen extends React.Component {
    handleSubmit = formState => {
      //  this.props.addContact(formState)
      this.props.addContact({name: formState.name, phone: formState.phone, key: this.props.id})
      this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <AddContactForm onSubmit={this.handleSubmit} /> 
        )
    }
} 

const mapStateToProps = state => ({
  id: state.contacts.length
})


export default connect(mapStateToProps, {addContact: addContact})(AddContactScreen)