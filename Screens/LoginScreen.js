import React from 'react'
import {TextInput, View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'
import Contacts from '../Contacts'

export default class LoginScreen extends React.Component {
    state = {
        username: '',
        password: '',
        error: '',
        isError: false
    }

    handlePassword = password => {
        this.setState({password, isError: false})
    }

    handleUserName = username => {
        this.setState({username, isError: false})
    }

    login = () => {
        if (this.state.username === 'admin' && this.state.password === 'root') {
            this.setState({
                username: '',
                password: '',
                error: '',
                isError: false
            })
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Tabs' }]
            })
        }
        else this.setState({
            isError: true,
            error: 'Wrong username or password! Try again'
        })
    }
    
    
    render () {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBar}
                    placeholder="Username"
                    value={this.state.username}
                    onChangeText={this.handleUserName}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputBar}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={this.handlePassword}
                    autoCapitalize="none"
                    secureTextEntry
                />
                {this.state.isError && <Text style={styles.errorText}>{this.state.error}</Text>}
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Constants.statusBarHeight,
        backgroundColor: '#fff',
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
        width: 90,
        height: 30,
        margin: 10,
        borderRadius: 2,
    },
    
    buttonText: {
        color: 'white',
        fontSize: 15,
    },

    inputBar: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        width: 250,
    },
    errorText: {
        color: 'red',
        margin: 5,
    }
})