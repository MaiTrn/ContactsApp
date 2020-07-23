import React from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import propTypes from 'prop-types'
import Constants from 'expo-constants'

export default class AddContact extends React.Component {
    static propTypes = {
        name: propTypes.string,
        phone: propTypes.string
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false,
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name || prevState.phone !== this.state.phone)
            this.validateForm()
    }

 /*  handleNameChange = name => {
        this.setState({name})
    }

    handlePhoneChange = phone => {
        if (phone.length <= 10 && +phone >= 0)
            this.setState({phone})
    }*/

    getHandler = key => val => {
        if (key === 'phone') {
            if(val.length <= 10 && +val >= 0) {
                this.setState({[key] : val})
        }}
        else this.setState({[key] : val})
    }

    validateForm = () => {
        if (this.state.name.length >= 3 && this.state.phone.length === 10)
        {
            this.setState({isFormValid: true})
        }
    }

    handleSubmit = () => {
       // this.props.navigation.navigate('Main')
        if (this.state.phone.length == 10 && this.state.name.length >= 3) {
            this.props.onSubmit({name: this.state.name, phone: this.state.phone})
            this.setState({
                name: '',
                phone: '',
                isFormValid: false,
            })
        }
        
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBar}
                    placeholder="Name" 
                    value={this.state.name} 
                    onChangeText={this.getHandler('name')} 
                />
                <TextInput style={styles.inputBar}
                    placeholder="Phone" 
                    value={this.state.phone} 
                    keyboardType = 'numeric'
                    onChangeText={this.getHandler('phone')} 
                />
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit} disabled={!this.state.isFormValid}>
                    <Text style={styles.buttonText}>Add Contact</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: Constants.statusBarHeight,
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
    },

    inputBar: {
        width: 300,
        height: 35,
        paddingLeft: 10,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        opacity: .6,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor:'#BA2020', 
        width: 120,
        height: 30,
        margin: 20,
        borderRadius: 2,
    },

    buttonText: {
        fontSize: 15,
        color: 'white',
    },
})