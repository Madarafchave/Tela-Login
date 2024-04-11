import { StyleSheet } from 'react-native';

export const loginScreenStyles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#E8E8E8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 200,
      height: 100,
      marginBottom: 20,
    },
    input: {
      width: 320,
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
    },
    button: {
      width: 320,
      height: 40,
      backgroundColor: '#4B7FA8',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    forgotPassword: {
      color: '#000000',
      textAlign: 'right',
      textDecorationLine: 'underline',
      marginBottom: 20,
      marginLeft: 190,
    },
  });
  